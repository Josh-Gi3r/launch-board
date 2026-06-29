/**
 * About / Mission page.
 * Customize this content to describe your platform.
 */
export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-32 relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute top-1/2 -right-12 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
          <span className="bg-tertiary text-on-tertiary-fixed font-label font-bold text-xs px-3 py-1 uppercase tracking-widest rounded-full">Open Source Template</span>
          <div className="h-[2px] flex-grow bg-outline-variant mb-2"></div>
        </div>
        <h1 className="font-headline text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
          The <span className="text-primary">Open</span> <br />
          Product <br />
          <span className="italic [-webkit-text-stroke:1px_var(--color-primary)] text-transparent">Board.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="font-headline text-2xl md:text-4xl font-bold text-on-surface leading-tight mb-8">
              A COMMUNITY-DRIVEN INDEX WHERE BUILDERS SUBMIT, DISCOVER, AND VOTE ON THE TOOLS SHAPING THE NEXT WEB.
            </p>
          </div>
          <div className="md:col-span-5 border-l-4 border-secondary pl-8">
            <p className="text-on-surface-variant font-medium leading-relaxed">
              LaunchBoard gives every tool a fair shot at discovery. No algorithms deciding what surfaces — the community votes, the board reflects it. Submit your product, share your work, and let builders decide what moves forward.
            </p>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border-4 border-dashed border-outline-variant group-hover:border-primary transition-colors duration-500 -z-10"></div>
          <img className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white shadow-[12px_12px_0px_0px_var(--color-secondary)]" alt="Builders at work" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&q=80" />
          <div className="absolute bottom-6 -right-6 bg-secondary text-on-secondary-fixed p-6 font-headline font-black uppercase text-xl italic shadow-[4px_4px_0px_0px_#000000]">
            BUILT BY BUILDERS
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-black uppercase tracking-tighter flex items-center gap-4">
            <span className="text-secondary">01</span> WHAT WE ARE
          </h2>
          <div className="space-y-6">
            <div className="bg-surface-container-low p-8 border-2 border-outline-variant hover:border-secondary transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-secondary">memory</span>
              </div>
              <h3 className="font-headline text-xl font-bold uppercase mb-3 text-primary">PRODUCT INDEX</h3>
              <p className="text-on-surface-variant">A curated, community-maintained index of tools, apps, and projects. Everything is submitted by makers and voted on by the community — no gatekeeping.</p>
            </div>
            <div className="bg-surface-container-low p-8 border-2 border-outline-variant hover:border-secondary transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-secondary">hub</span>
              </div>
              <h3 className="font-headline text-xl font-bold uppercase mb-3 text-primary">OPEN TEMPLATE</h3>
              <p className="text-on-surface-variant">This board is an open-source template. Fork it, swap in your Supabase project, and launch your own discovery community in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Declaration */}
      <section className="mb-40 bg-primary p-12 md:p-24 relative overflow-hidden shadow-[16px_16px_0px_0px_#ffffff]">
        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex justify-between items-start">
            <span className="font-label text-on-primary-fixed-variant font-black uppercase tracking-widest border-b-2 border-on-primary-fixed-variant">WHAT WE BELIEVE</span>
            <span className="material-symbols-outlined text-on-primary-fixed-variant text-4xl">emergency</span>
          </div>
          <h2 className="font-headline text-5xl md:text-8xl font-black text-on-primary-fixed leading-[0.9] uppercase tracking-tighter">
            GREAT TOOLS <br />
            DESERVE TO BE{' '}
            <span className="bg-on-primary-fixed text-primary px-4">FOUND</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 border-t-2 border-on-primary-fixed-variant pt-12">
            <div className="space-y-4">
              <h4 className="font-headline font-black text-on-primary-fixed uppercase tracking-widest text-lg">WHY EXIST?</h4>
              <p className="text-on-primary-fixed-variant font-bold leading-tight">Because the best tools often don't have the biggest marketing budgets. Discovery should be driven by utility, not spend.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-black text-on-primary-fixed uppercase tracking-widest text-lg">OUR MANDATE</h4>
              <p className="text-on-primary-fixed-variant font-bold leading-tight">Surface the signal. Cut the noise. Give every tool — big or small — a fair shot at the community's attention.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-black text-on-primary-fixed uppercase tracking-widest text-lg">OPEN SOURCE</h4>
              <p className="text-on-primary-fixed-variant font-bold leading-tight">Fork it. Customize it. Run your own community board. The infrastructure belongs to everyone who builds with it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="mb-40">
        <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
          <span className="text-tertiary">02</span> CORE PRINCIPLES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "visibility", title: "RADICAL TRANSPARENCY", desc: "No black-box ranking. Community votes are the only signal that moves products up the board." },
            { icon: "diversity_3", title: "COMMUNITY CURATION", desc: "No single entity controls what surfaces. The collective intelligence of the community decides." },
            { icon: "speed", title: "FAST SUBMISSIONS", desc: "Submit in under 2 minutes. Review within 48 hours. Ship fast, learn fast." },
            { icon: "psychology", title: "BUILDER-FIRST", desc: "Tools by builders, for builders. We optimize for useful, not popular." },
            { icon: "lock_open", title: "OPEN INFRASTRUCTURE", desc: "The whole stack is open source. Fork it. Run your own board. No lock-in." },
            { icon: "explore", title: "SERENDIPITY BY DESIGN", desc: "Browsing the board should surface things you didn't know you needed. That's the point." },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container p-8 border-2 border-outline hover:border-primary transition-colors group">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="font-headline font-black text-xl uppercase mb-4">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
