import { Link } from 'react-router-dom';
import { partners } from '@/config/data';
import { siteConfig } from '@/config/site';

const { partnerTiers } = siteConfig;

export default function Partners() {
  return (
    <main className="pt-28 pb-24">
      {/* Hero */}
      <section className="px-8 mb-24 max-w-7xl mx-auto">
        <span className="text-tertiary font-label font-bold text-sm uppercase tracking-widest mb-4 block">Ecosystem</span>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <h1 className="font-headline font-black text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85]">
            OUR <span className="text-secondary">PARTNERS</span>
          </h1>
          <p className="text-on-surface-variant max-w-md text-lg">
            Built on a foundation of best-in-class infrastructure. Every integration is chosen for reliability, decentralization, and performance.
          </p>
        </div>

        {/* Tier Legend */}
        <div className="flex flex-wrap gap-4 mb-16">
          {Object.entries(partnerTiers).map(([tier, color]) => (
            <div key={tier} className={`flex items-center gap-2 border-2 border-${color} px-4 py-2`}>
              <div className={`w-3 h-3 bg-${color}`} />
              <span className={`font-label font-black text-xs uppercase tracking-widest text-${color}`}>{tier} PARTNER</span>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Grid */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p) => {
            const color = partnerTiers[p.tier];
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-surface-container border-2 border-outline p-8 group hover:border-${color} transition-all flex flex-col`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`text-xs font-label font-black uppercase tracking-widest text-${color} mb-2 block`}>
                      {p.tier} PARTNER
                    </span>
                    <h2 className={`font-headline font-black text-3xl uppercase group-hover:text-${color} transition-colors`}>
                      {p.name}
                    </h2>
                  </div>
                  <span className={`material-symbols-outlined text-${color} opacity-40 group-hover:opacity-100 transition-opacity text-3xl`}>
                    open_in_new
                  </span>
                </div>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant border border-outline px-3 py-1 self-start mb-6">
                  {p.category}
                </span>
                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{p.desc}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto bg-surface-container-high border-4 border-outline p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-tertiary font-label font-bold text-sm uppercase tracking-widest mb-4 block">Join the Ecosystem</span>
              <h2 className="font-headline font-black text-5xl uppercase tracking-tighter mb-6">
                BECOME A <span className="text-primary">PARTNER</span>
              </h2>
              <p className="text-on-surface-variant text-lg mb-8">
                We partner with infrastructure providers, developer tools, and protocols that share our commitment to open, community-driven software discovery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/submit"
                  className="bg-primary text-black font-headline font-black text-lg px-8 py-5 border-2 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_#000000] transition-all"
                >
                  APPLY NOW
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-outline px-8 py-5 font-headline font-black uppercase hover:border-secondary hover:text-secondary transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "hub", label: "GLOBAL REACH", value: "Worldwide" },
                { icon: "groups", label: "ACTIVE BUILDERS", value: "Growing" },
                { icon: "download", label: "TOTAL DOWNLOADS", value: "Tracked" },
                { icon: "verified", label: "VERIFIED PRODUCTS", value: "Curated" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-container border-2 border-outline p-6 text-center">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-2 block">{stat.icon}</span>
                  <div className="font-headline font-black text-2xl text-white mb-1">{stat.value}</div>
                  <div className="text-on-surface-variant text-xs uppercase tracking-widest font-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
