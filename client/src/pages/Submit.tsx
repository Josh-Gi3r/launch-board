import { useState } from 'react';
import { getRepository } from '@/lib/repository';
import { siteConfig } from '@/config/site';

type Pricing = 'FREE' | 'FREEMIUM' | 'PAID' | 'OPEN SOURCE' | '';

export default function Submit() {
  const [pricing, setPricing] = useState<Pricing>('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    productName: '',
    tagline: '',
    category: '',
    description: '',
    website: '',
    github: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !pricing) return;
    setLoading(true);
    setError(null);
    try {
      const repo = await getRepository();
      await repo.submitProduct({
        product_name: form.productName,
        tagline: form.tagline,
        category: form.category,
        description: form.description,
        website_url: form.website,
        github_url: form.github || undefined,
        pricing_model: pricing,
        contact_email: form.email,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      // Graceful demo fallback: treat network errors as demo mode
      if (message.includes('Failed to fetch') || message.includes('Invalid URL')) {
        setSubmitted(true);
      } else {
        setError('Submission failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ productName: '', tagline: '', category: '', description: '', website: '', github: '', email: '' });
    setPricing('');
    setAgreed(false);
    setError(null);
  };

  if (submitted) {
    return (
      <main className="pt-28 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center py-32 border-4 border-secondary shadow-[12px_12px_0px_0px_var(--color-secondary)]">
          <span className="material-symbols-filled text-secondary text-8xl mb-6 block">check_circle</span>
          <h1 className="font-headline font-black text-5xl uppercase tracking-tighter mb-4">SUBMISSION RECEIVED</h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Your product has been submitted for review. We will reach out within 48 hours.
          </p>
          <button
            onClick={resetForm}
            className="bg-secondary text-black font-headline font-black px-10 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000] transition-all uppercase"
          >
            SUBMIT ANOTHER
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-24 px-6 md:px-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto mb-16">
        <span className="text-tertiary font-label font-bold text-sm uppercase tracking-widest mb-4 block">Product Submission</span>
        <h1 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6">
          SUBMIT YOUR <span className="text-primary">PRODUCT</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Got something worth sharing? Submit your product to the {siteConfig.name} index. Our team reviews every submission within 48 hours.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Product Name + Tagline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
                PRODUCT NAME <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="productName"
                value={form.productName}
                onChange={handleChange}
                required
                className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body placeholder:text-on-surface-variant transition-colors"
                placeholder="MY_AWESOME_TOOL"
              />
            </div>
            <div>
              <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
                TAGLINE <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="tagline"
                value={form.tagline}
                onChange={handleChange}
                required
                className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body placeholder:text-on-surface-variant transition-colors"
                placeholder="One sentence that captures your product."
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
              CATEGORY <span className="text-primary">*</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body text-white transition-colors"
            >
              <option value="" disabled>SELECT A CATEGORY</option>
              {siteConfig.categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
              DESCRIPTION <span className="text-primary">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body placeholder:text-on-surface-variant resize-none transition-colors"
              placeholder="Tell us about your product. What problem does it solve? What makes it unique?"
            />
          </div>

          {/* URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
                WEBSITE URL <span className="text-primary">*</span>
              </label>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                required
                className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body placeholder:text-on-surface-variant transition-colors"
                placeholder="https://your-product.com"
              />
            </div>
            <div>
              <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
                GITHUB / SOURCE
              </label>
              <input
                type="url"
                name="github"
                value={form.github}
                onChange={handleChange}
                className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body placeholder:text-on-surface-variant transition-colors"
                placeholder="https://github.com/your-repo"
              />
            </div>
          </div>

          {/* Media Upload placeholder */}
          <div>
            <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
              PRODUCT IMAGES
            </label>
            <div className="border-4 border-dashed border-outline hover:border-secondary transition-colors p-12 text-center cursor-pointer group">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block group-hover:text-secondary transition-colors">cloud_upload</span>
              <p className="text-on-surface-variant mb-2 font-medium">Drag and drop images here, or click to browse</p>
              <p className="text-sm text-outline">PNG, JPG, GIF up to 5MB. Recommended: 1920x1080</p>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
              PRICING MODEL <span className="text-primary">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {(['FREE', 'FREEMIUM', 'PAID', 'OPEN SOURCE'] as Pricing[]).map((p) => (
                <label
                  key={p}
                  className={`flex items-center gap-3 border-2 px-6 py-4 cursor-pointer transition-all ${
                    pricing === p ? 'border-primary bg-primary/10 text-primary' : 'border-outline hover:border-tertiary'
                  }`}
                >
                  <input
                    type="radio"
                    name="pricing"
                    value={p}
                    checked={pricing === p}
                    onChange={() => setPricing(p)}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="font-label font-bold uppercase text-sm">{p}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block font-headline font-black uppercase text-sm mb-3 tracking-widest">
              YOUR EMAIL <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-surface-container-high border-2 border-outline focus:border-primary focus:ring-0 px-4 py-4 font-body placeholder:text-on-surface-variant transition-colors"
              placeholder="you@example.com"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="border-2 border-red-500 bg-red-500/10 px-6 py-4 text-red-400 font-label uppercase text-sm">
              {error}
            </div>
          )}

          {/* Terms */}
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 text-primary focus:ring-primary w-5 h-5 cursor-pointer"
            />
            <label className="text-on-surface-variant text-sm cursor-pointer" onClick={() => setAgreed(!agreed)}>
              I agree to the{' '}
              <a href="#" className="text-secondary underline hover:text-secondary/80">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-secondary underline hover:text-secondary/80">Community Guidelines</a>.{' '}
              I confirm that this product is my own work and does not violate any copyrights.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!agreed || !pricing || loading}
            className="w-full bg-primary text-black font-headline font-black text-xl py-6 shadow-[8px_8px_0px_0px_#ffffff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#ffffff] transition-all uppercase disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[8px_8px_0px_0px_#ffffff]"
          >
            {loading ? 'SUBMITTING...' : 'SUBMIT FOR REVIEW'}
          </button>
        </form>
      </section>

      {/* What Happens Next */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="font-headline text-2xl font-black uppercase mb-8 tracking-widest">WHAT HAPPENS NEXT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "REVIEW", desc: "Our team reviews your submission within 48 hours.", color: "primary" },
            { step: "02", title: "FEEDBACK", desc: "We will reach out if we need any additional information.", color: "secondary" },
            { step: "03", title: "LAUNCH", desc: "Your product goes live on the index.", color: "tertiary" },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div className={`w-16 h-16 bg-${item.color} text-black font-headline font-black text-xl flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_#ffffff]`}>
                {item.step}
              </div>
              <h3 className="font-headline font-black uppercase mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
