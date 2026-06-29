/**
 * Supabase adapter — default backend for product submissions.
 *
 * Required Supabase setup (see .env.example for full SQL):
 *   - Table: public.product_submissions
 *   - RLS: INSERT allowed for anon, SELECT restricted to service-role
 */
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { ProductSubmission, SubmissionRepository } from "../repository";

export class SupabaseAdapter implements SubmissionRepository {
  private client: SupabaseClient;

  constructor(url: string, anonKey: string) {
    this.client = createClient(url, anonKey);
  }

  async submitProduct(data: ProductSubmission): Promise<void> {
    const { error } = await this.client.from("product_submissions").insert([
      { ...data, status: "pending", created_at: new Date().toISOString() },
    ]);
    if (error) throw error;
  }
}
