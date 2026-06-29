import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-white bg-[#0a0a0a]">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-headline font-black text-white uppercase block mb-4">
            {siteConfig.name}
          </Link>
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
            {siteConfig.tagline}
          </p>
          <div className="flex gap-3">
            {[
              { icon: "terminal", color: "primary" },
              { icon: "code", color: "secondary" },
              { icon: "hub", color: "tertiary" },
            ].map((s) => (
              <div
                key={s.icon}
                className={`w-10 h-10 bg-surface-container border-2 border-outline flex items-center justify-center hover:border-${s.color} cursor-pointer transition-colors group`}
              >
                <span className={`material-symbols-outlined text-white group-hover:text-${s.color} text-sm`}>{s.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Discover */}
        <div>
          <h4 className="font-headline font-black uppercase text-sm tracking-widest mb-6 text-white">DISCOVER</h4>
          <ul className="space-y-3">
            {[
              { label: "Library", to: "/library" },
              { label: "Trending", to: "/library" },
              { label: "New Arrivals", to: "/library" },
              { label: "Top Rated", to: "/library" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-on-surface-variant text-sm hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Build */}
        <div>
          <h4 className="font-headline font-black uppercase text-sm tracking-widest mb-6 text-white">BUILD</h4>
          <ul className="space-y-3">
            {[
              { label: "Submit Product", to: "/submit" },
              { label: "Accelerator", to: "/builders" },
              { label: "Partners", to: "/partners" },
              { label: "About", to: "/about" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-headline font-black uppercase text-sm tracking-widest mb-6 text-white">STAY UPDATED</h4>
          <p className="text-on-surface-variant text-sm mb-4">
            Weekly drops of the best new tools, builder spotlights, and community updates.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 bg-surface-container border-2 border-outline border-r-0 px-4 py-3 text-sm font-label uppercase placeholder:text-on-surface-variant focus:border-secondary focus:ring-0 transition-colors"
            />
            <button className="bg-secondary text-black font-headline font-black px-4 py-3 border-2 border-secondary hover:bg-secondary/80 transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-outline">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest">
            {siteConfig.copyright}
          </p>
          <div className="flex gap-8">
            {['Terms', 'Privacy', 'API Docs', 'Status'].map((item) => (
              <a key={item} href="#" className="text-on-surface-variant text-xs font-label uppercase tracking-widest hover:text-secondary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
