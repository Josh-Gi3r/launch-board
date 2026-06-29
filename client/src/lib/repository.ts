/**
 * SubmissionRepository — pluggable data layer for product submissions.
 *
 * Swap adapters via environment variables (see .env.example):
 *   VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY → Supabase adapter (default)
 *   VITE_API_URL                                → REST adapter
 *   (nothing set)                               → no-op demo adapter
 */

export interface ProductSubmission {
  product_name: string;
  tagline: string;
  category: string;
  description: string;
  website_url: string;
  github_url?: string;
  pricing_model: string;
  contact_email: string;
  status?: "pending" | "approved" | "rejected";
}

export interface SubmissionRepository {
  submitProduct(data: ProductSubmission): Promise<void>;
}

// ── Factory ───────────────────────────────────────────────────────────────────

let _repo: SubmissionRepository | null = null;

export async function getRepository(): Promise<SubmissionRepository> {
  if (_repo) return _repo;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  if (supabaseUrl && supabaseKey) {
    const { SupabaseAdapter } = await import("./adapters/supabase");
    _repo = new SupabaseAdapter(supabaseUrl, supabaseKey);
    return _repo;
  }

  if (apiUrl) {
    const { RestAdapter } = await import("./adapters/rest");
    _repo = new RestAdapter(apiUrl);
    return _repo;
  }

  // Demo mode: form works, data is not persisted.
  _repo = {
    submitProduct: async (_data: ProductSubmission) => {
      console.info("[LaunchBoard] No backend configured — running in demo mode.");
    },
  };
  return _repo;
}
