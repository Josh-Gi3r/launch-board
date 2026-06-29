import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <main className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 mb-12 text-sm font-label uppercase tracking-widest text-on-surface-variant">
        <Link to="/library" className="hover:text-primary transition-colors">Library</Link>
        <span>/</span>
        <span className="text-white">NEURAL_SHIELD V2</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Hero Image */}
          <div className="aspect-video border-4 border-outline overflow-hidden bg-black shadow-[12px_12px_0px_0px_rgba(0,251,251,1)]">
            <img
              className="w-full h-full object-cover"
              alt="NEURAL_SHIELD V2"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=80"
            />
          </div>

          {/* Title Block */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary text-black font-label font-black text-xs px-3 py-1 uppercase tracking-widest">SECURITY</span>
              <span className="material-symbols-filled text-tertiary">verified</span>
              <span className="text-on-surface-variant font-mono text-xs">v2.4.1 // STABLE</span>
            </div>
            <h1 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6">
              NEURAL_SHIELD V2
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              Autonomous threat detection and response system built for edge computing protocols. Leverages on-device neural inference to identify and neutralize zero-day vulnerabilities before they propagate across your network.
            </p>
          </div>

          {/* Screenshot Gallery */}
          <div>
            <h2 className="font-headline font-black text-2xl uppercase mb-6 border-b-2 border-outline pb-4">SCREENSHOTS</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&q=80",
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&q=80",
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=640&q=80",
                "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=640&q=80",
              ].map((src, i) => (
                <div key={i} className="aspect-video border-2 border-outline overflow-hidden group cursor-pointer hover:border-secondary transition-colors">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={src} alt={`Screenshot ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="font-headline font-black text-2xl uppercase mb-6 border-b-2 border-outline pb-4">KEY FEATURES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "shield", title: "ZERO-DAY DETECTION", desc: "Neural inference identifies novel attack vectors in real time." },
                { icon: "bolt", title: "SUB-10MS RESPONSE", desc: "Automated containment before threats propagate." },
                { icon: "hub", title: "EDGE-NATIVE", desc: "Runs fully on-device with no cloud dependency required." },
                { icon: "lock", title: "ZERO TRUST ARCH", desc: "Every packet verified. Every connection authenticated." },
                { icon: "analytics", title: "THREAT ANALYTICS", desc: "Comprehensive dashboards with exportable audit logs." },
                { icon: "update", title: "AUTO-UPDATE", desc: "Signature database updates every 15 minutes." },
              ].map((f, i) => (
                <div key={i} className="bg-surface-container p-6 border-2 border-outline hover:border-secondary transition-colors group">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3 block group-hover:scale-110 transition-transform">{f.icon}</span>
                  <h3 className="font-headline font-black uppercase mb-2">{f.title}</h3>
                  <p className="text-on-surface-variant text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="font-headline font-black text-2xl uppercase mb-6 border-b-2 border-outline pb-4">COMMUNITY REVIEWS</h2>
            <div className="space-y-6">
              {[
                { user: "0xDEAD_BEEF", rating: 5, comment: "Caught a supply chain attack that my enterprise AV missed entirely. This thing is the real deal.", date: "2 days ago" },
                { user: "KERNEL_PANIC_42", rating: 5, comment: "Edge deployment was seamless. Running on 12 nodes with zero performance hit.", date: "1 week ago" },
                { user: "GHOST_IN_SHELL", rating: 4, comment: "Excellent detection rates. The UI could use some work but the core engine is flawless.", date: "2 weeks ago" },
              ].map((r, i) => (
                <div key={i} className="bg-surface-container-high border-2 border-outline p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-container-highest border-2 border-outline flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">person</span>
                      </div>
                      <span className="font-headline font-black text-sm uppercase">{r.user}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <span key={si} className={`material-symbols-filled text-sm ${si < r.rating ? 'text-primary' : 'text-outline'}`}>star</span>
                        ))}
                      </div>
                      <span className="text-on-surface-variant text-xs font-mono">{r.date}</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* CTA Card */}
          <div className="bg-surface-container-high border-4 border-outline p-8 shadow-[8px_8px_0px_0px_rgba(0,251,251,1)] sticky top-28">
            <div className="text-center mb-8">
              <div className="text-5xl font-headline font-black text-white mb-1">FREE</div>
              <div className="text-on-surface-variant text-sm uppercase tracking-widest">Open Source // MIT License</div>
            </div>
            <button className="w-full bg-primary text-black font-headline font-black text-xl py-5 border-2 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_#000000] transition-all mb-4 uppercase">
              DOWNLOAD NOW
            </button>
            <button className="w-full border-2 border-outline py-4 font-headline font-black uppercase hover:border-secondary hover:text-secondary transition-colors">
              VIEW SOURCE
            </button>

            {/* Stats */}
            <div className="mt-8 space-y-4 border-t-2 border-outline pt-8">
              {[
                { label: "Downloads", value: "89K", icon: "download" },
                { label: "Rating", value: "4.8 / 5.0", icon: "star" },
                { label: "Version", value: "v2.4.1", icon: "tag" },
                { label: "License", value: "MIT", icon: "gavel" },
                { label: "Updated", value: "Mar 2026", icon: "update" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">{s.icon}</span>
                    <span className="uppercase tracking-widest text-xs font-label">{s.label}</span>
                  </div>
                  <span className="font-headline font-black">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-surface-container border-2 border-outline p-6">
            <h3 className="font-headline font-black uppercase mb-4 text-sm tracking-widest">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {['security', 'edge-computing', 'neural-network', 'zero-trust', 'open-source', 'linux', 'arm64', 'x86'].map((tag) => (
                <span key={tag} className="bg-surface-container-highest border border-outline px-3 py-1 text-xs font-label uppercase text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="bg-surface-container border-2 border-outline p-6">
            <h3 className="font-headline font-black uppercase mb-4 text-sm tracking-widest">RELATED PRODUCTS</h3>
            <div className="space-y-4">
              {[
                { title: "GLITCH_SCAN", cat: "SECURITY" },
                { title: "NEON_PROXY", cat: "UTILITIES" },
                { title: "CHAIN_VAULT", cat: "WEB3" },
              ].map((r) => (
                <Link key={r.title} to="/library" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-surface-container-highest border-2 border-outline flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm">widgets</span>
                  </div>
                  <div>
                    <div className="font-headline font-black text-sm group-hover:text-primary transition-colors">{r.title}</div>
                    <div className="text-on-surface-variant text-xs uppercase tracking-widest">{r.cat}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
