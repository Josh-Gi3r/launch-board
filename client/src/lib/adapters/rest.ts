/**
 * REST adapter — POST to your own API endpoint.
 *
 * Set VITE_API_URL in .env to enable.
 * The endpoint should accept: POST /submissions  (body: ProductSubmission JSON)
 * and return 2xx on success.
 */
import type { ProductSubmission, SubmissionRepository } from "../repository";

export class RestAdapter implements SubmissionRepository {
  constructor(private baseUrl: string) {}

  async submitProduct(data: ProductSubmission): Promise<void> {
    const res = await fetch(`${this.baseUrl}/submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, status: "pending" }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Submission failed: ${res.status} ${text}`);
    }
  }
}
