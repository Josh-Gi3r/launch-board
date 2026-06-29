import { Link } from 'react-router-dom';
import { builders } from '@/config/data';

export default function Builders() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-tertiary py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[30rem] font-headline font-black text-black">LAB</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-black text-tertiary px-4 py-1 font-black text-xs uppercase">ACCELERATOR PROGRAM</span>
            <span className="text-black/60 font-mono">COHORT_07 // 2026</span>
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-8">
            BUILD THE <br />
            FUTURE <span className="bg-black text-tertiary px-4">WITH US</span>
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mb-12 font-bold">
            The Accelerator is where visionary builders get the resources, network, and infrastructure to launch world-changing software.
          </p>
          <div className="flex gap-6">
            <Link to="/submit" className="bg-black text-tertiary font-headline font-black text-xl px-12 py-6 shadow-[8px_8px_0px_0px_#ffffff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#ffffff] transition-all">
              APPLY NOW
            </Link>
            <Link to="/about" className="border-4 border-black text-black font-headline font-black px-8 py-5 uppercase hover:bg-black hover:text-tertiary transition-colors">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — replace with real numbers before launching */}
      <section className="py-16 px-8 bg-surface border-y-4 border-outline">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "240+", label: "PRODUCTS LAUNCHED" },
            { value: "$42M", label: "FUNDING RAISED" },
            { value: "12", label: "COHORTS COMPLETED" },
            { value: "98%", label: "BUILDER SATISFACTION" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-7xl font-headline font-black text-primary">{stat.value}</div>
              <div className="text-on-surface-variant font-label uppercase tracking-widest text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Builder Profiles */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-headline text-5xl font-black uppercase tracking-tighter">
              MEET THE <span className="text-primary">BUILDERS</span>
            </h2>
            <p className="text-on-surface-variant max-w-sm">
              These are the engineers, designers, and hackers who chose to build here. Their products are live. Their impact is real.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builders.map((b) => (
              <div
                key={b.handle}
                className={`bg-surface-container border-2 border-outline p-8 hover:border-${b.color} transition-all group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 border-2 border-${b.color} overflow-hidden`}>
                    <img src={b.avatar} alt={b.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <div className={`font-headline font-black uppercase text-sm text-${b.color}`}>{b.handle}</div>
                    <div className="text-on-surface-variant text-xs">{b.name}</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center border-b border-outline pb-3">
                    <span className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Product</span>
                    <span className={`font-headline font-black text-sm group-hover:text-${b.color} transition-colors`}>{b.product}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline pb-3">
                    <span className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Cohort</span>
                    <span className="font-mono text-sm">{b.cohort}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Raised</span>
                    <span className={`font-headline font-black text-${b.color}`}>{b.raised}</span>
                  </div>
                </div>
                <Link to="/library" className={`block text-center border-2 border-${b.color} text-${b.color} py-3 font-headline font-black text-sm uppercase hover:bg-${b.color} hover:text-black transition-all`}>
                  VIEW PRODUCT
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-16 text-center">
            WHAT YOU <span className="text-secondary">GET</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "payments", title: "SEED FUNDING", desc: "$100K initial investment with follow-on opportunity up to $1M.", color: "primary" },
              { icon: "hub", title: "GLOBAL NETWORK", desc: "Access to 500+ mentors, investors, and industry leaders.", color: "secondary" },
              { icon: "cloud", title: "INFRASTRUCTURE", desc: "Free hosting, compute, and storage for your first year.", color: "tertiary" },
              { icon: "campaign", title: "MARKETING", desc: "Featured placement across the board and partner channels.", color: "primary" },
              { icon: "school", title: "MENTORSHIP", desc: "Weekly 1:1 sessions with founders who've been there.", color: "secondary" },
              { icon: "groups", title: "COMMUNITY", desc: "Join a cohort of ambitious builders for life.", color: "tertiary" },
            ].map((item, i) => (
              <div key={i} className={`bg-surface-container p-8 border-4 border-outline hover:border-${item.color} transition-colors`}>
                <span className={`material-symbols-outlined text-${item.color} text-5xl mb-6 block`}>{item.icon}</span>
                <h3 className="font-headline font-black text-2xl uppercase mb-4">{item.title}</h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-16 text-center">
            THE <span className="text-primary">PROCESS</span>
          </h2>
          <div className="space-y-0">
            {[
              { step: "01", title: "APPLY", desc: "Submit your application with your vision and prototype.", date: "ONGOING" },
              { step: "02", title: "INTERVIEW", desc: "Selected teams meet with our evaluation committee.", date: "2 WEEKS" },
              { step: "03", title: "SELECTION", desc: "Top 20 teams announced and onboarded.", date: "1 WEEK" },
              { step: "04", title: "BUILD", desc: "12-week intensive program with milestones.", date: "12 WEEKS" },
              { step: "05", title: "LAUNCH", desc: "Demo Day presentation to 200+ investors.", date: "FINALE" },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className="w-24 shrink-0 text-right">
                  <span className="text-on-surface-variant text-sm font-mono">{item.date}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-on-primary-fixed font-headline font-black text-xl flex items-center justify-center shadow-[4px_4px_0px_0px_var(--color-secondary)] group-hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] transition-all">
                    {item.step}
                  </div>
                  {i < 4 && <div className="w-1 h-24 bg-outline"></div>}
                </div>
                <div className="pb-12">
                  <h3 className="font-headline font-black text-2xl uppercase mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-8">
            READY TO BUILD?
          </h2>
          <p className="text-xl text-black/70 mb-12 font-bold">
            Applications for Cohort 07 are open. Don't miss your chance.
          </p>
          <Link to="/submit" className="inline-block bg-black text-white font-headline font-black text-2xl px-16 py-8 shadow-[8px_8px_0px_0px_#ffffff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#ffffff] transition-all">
            START APPLICATION
          </Link>
        </div>
      </section>
    </main>
  );
}
