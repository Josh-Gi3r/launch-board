import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import {
  featuredProducts,
  trendingProducts,
  libraryPreview,
  communityVotes,
  ecosystemPartnerNames,
} from '@/config/data';

export default function Home() {
  const [votes, setVotes] = useState<Record<number, number>>(
    Object.fromEntries(trendingProducts.map((p) => [p.id, p.votes]))
  );
  const [voted, setVoted] = useState<Record<number, boolean>>({});

  const handleVote = (id: number) => {
    if (voted[id]) return;
    setVotes((v) => ({ ...v, [id]: v[id] + 1 }));
    setVoted((v) => ({ ...v, [id]: true }));
  };

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative min-h-[920px] flex flex-col items-center justify-center grainy-gradient overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative z-10 text-center max-w-6xl w-full">
          <span className="inline-block bg-black/50 border border-white/30 text-white/80 font-label text-xs uppercase tracking-[0.3em] px-4 py-2 mb-8 backdrop-blur-sm">
            {siteConfig.name} // Product Discovery Board
          </span>
          <h1 className="font-headline font-black text-6xl md:text-[7rem] text-white uppercase tracking-[-0.04em] leading-[0.85] mb-6">
            DISCOVER THE{' '}
            <span className="text-on-primary-fixed-variant bg-tertiary px-4 skew-x-[-6deg] inline-block">
              FUTURE
            </span>{' '}
            OF FREE SOFTWARE.
          </h1>
          <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto mb-12">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/library"
              className="bg-primary text-black font-headline font-black text-lg px-10 py-5 border-2 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_#000000] transition-all"
            >
              EXPLORE LIBRARY
            </Link>
            <Link
              to="/submit"
              className="bg-transparent text-white font-headline font-black text-lg px-10 py-5 border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all"
            >
              SUBMIT PRODUCT
            </Link>
          </div>

          {/* Product Carousel */}
          <div className="mt-20 flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x px-2">
            {featuredProducts.map((p, i) => (
              <Link
                to="/library"
                key={p.id}
                className={`min-w-[300px] snap-center bg-surface-container-high border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000000] transition-transform hover:rotate-0 cursor-pointer ${i === 0 ? 'rotate-[-1.5deg]' : i === 1 ? 'rotate-[1.5deg]' : 'rotate-[-1deg]'}`}
              >
                <div className="h-44 overflow-hidden border-2 border-black mb-4 bg-black">
                  <img className="w-full h-full object-cover" alt={p.title} src={p.img} />
                </div>
                <span className={`text-xs font-label font-black uppercase tracking-widest text-${p.color} mb-1 block`}>{p.category}</span>
                <h3 className={`font-headline font-black text-xl uppercase text-${p.color}`}>{p.title}</h3>
                <p className="text-sm mt-1 font-medium opacity-70 text-white">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending Now ── */}
      <section className="bg-surface py-24 px-8 border-y-4 border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-headline text-tertiary font-bold tracking-[0.3em] uppercase block mb-4 text-sm">Live Activity</span>
              <h2 className="font-headline font-black text-5xl md:text-7xl uppercase italic tracking-tighter">Trending Now</h2>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-highest border-2 border-secondary px-6 py-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_var(--color-secondary)]">
                <span className="material-symbols-outlined text-secondary">local_fire_department</span>
                <div className="font-headline font-black">
                  <div className="text-xs text-secondary-dim uppercase tracking-widest">Community Votes</div>
                  <div className="text-2xl">{Object.values(votes).reduce((a, b) => a + b, 0).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((p, i) => (
              <div
                key={p.id}
                className={`group cursor-pointer transition-all ${p.hot ? 'p-1 bg-gradient-to-br from-primary to-secondary' : ''}`}
              >
                <div className={`h-full p-6 flex flex-col justify-between ${p.hot ? 'bg-black border-2 border-black' : 'bg-surface-container-high border-2 border-outline hover:border-primary'}`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      {p.hot ? (
                        <span className="bg-primary text-black font-black px-2 py-1 text-xs uppercase">HOT_RELEASE</span>
                      ) : (
                        <span className="text-on-surface-variant font-mono text-xs uppercase">#{String(i + 1).padStart(3, '0')}</span>
                      )}
                      <span className="text-white/30 font-mono text-xs">#{String(i + 1).padStart(3, '0')}</span>
                    </div>
                    <h4 className={`font-headline font-bold text-xl mb-2 transition-colors ${p.hot ? 'text-white group-hover:text-primary' : 'text-white group-hover:text-primary'}`}>
                      {p.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm mb-6">{p.desc}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-secondary font-black text-sm">
                      <span className="material-symbols-filled text-sm">thumb_up</span>
                      {votes[p.id].toLocaleString()}
                    </div>
                    <button
                      onClick={() => handleVote(p.id)}
                      className={`px-4 py-2 text-xs font-black uppercase border-2 transition-all ${
                        voted[p.id]
                          ? 'border-secondary bg-secondary text-black cursor-default'
                          : 'border-primary text-primary hover:bg-primary hover:text-black'
                      }`}
                    >
                      {voted[p.id] ? 'VOTED' : 'VOTE_UP'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse Library ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="font-headline font-black text-6xl uppercase tracking-tight text-white underline decoration-primary decoration-8 underline-offset-8">
              Browse Library
            </h2>
            <Link
              to="/library"
              className="border-2 border-outline px-8 py-3 font-headline font-black uppercase hover:border-primary hover:text-primary transition-all"
            >
              VIEW ALL PRODUCTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {libraryPreview.map((p) => (
              <Link
                to="/library"
                key={p.id}
                className={`bg-surface-container border-2 border-outline p-2 group hover:shadow-[12px_12px_0px_0px_var(--color-${p.color})] transition-all`}
              >
                <div className="aspect-video overflow-hidden border-2 border-black mb-4 bg-black">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={p.title}
                    src={p.img}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline font-black text-2xl uppercase group-hover:text-primary transition-colors">{p.title}</h3>
                    <span className={`material-symbols-filled text-${p.color}`}>{p.icon}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6">{p.desc}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex-1 bg-white text-black font-black py-2 border-2 border-black shadow-[4px_4px_0px_0px_#777575] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                      GET_FREE
                    </button>
                    <button className="p-2 border-2 border-black bg-surface-container-highest hover:border-primary transition-colors">
                      <span className="material-symbols-outlined">bookmark</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accelerator CTA ── */}
      <section className="bg-secondary py-32 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 flex items-center justify-center -rotate-12 translate-x-20 pointer-events-none">
          <span className="text-[18rem] font-headline font-black text-black/10 uppercase select-none">BOOST</span>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <span className="inline-block bg-black text-secondary font-label font-black text-xs uppercase tracking-widest px-4 py-2">
              ACCELERATOR PROGRAM // COHORT_07
            </span>
            <h2 className="font-headline font-black text-7xl md:text-8xl text-black uppercase leading-[0.9]">
              LAUNCH INTO A{' '}
              <span className="bg-black text-secondary px-4">NETWORK</span>{' '}
              THAT MOVES.
            </h2>
            <p className="text-xl font-bold text-black/80 max-w-lg">
              We don't just host your software. We accelerate its evolution. Distribution, feedback, and scaling — all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/builders"
                className="bg-black text-secondary font-headline font-black text-xl px-10 py-6 shadow-[8px_8px_0px_0px_#ffffff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#ffffff] transition-all"
              >
                APPLY TO COHORT_07
              </Link>
              <Link
                to="/about"
                className="border-4 border-black text-black font-headline font-black px-8 py-5 uppercase hover:bg-black hover:text-secondary transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "hub", title: "GLOBAL REACH", desc: "Deployment to node clusters worldwide.", shadow: "var(--color-primary)" },
              { icon: "bolt", title: "WARP SPEED", desc: "Hardware-level optimization for every build.", shadow: "var(--color-tertiary)", mt: true },
              { icon: "payments", title: "SEED FUNDING", desc: "$100K initial investment with follow-on up to $1M.", shadow: "var(--color-secondary)", mt: false },
              { icon: "groups", title: "COMMUNITY", desc: "Join a cohort of ambitious builders for life.", shadow: "var(--color-primary)", mt: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-black p-6 border-4 border-white ${item.mt ? 'mt-8' : ''}`}
                style={{ boxShadow: `8px 8px 0px 0px ${item.shadow}` }}
              >
                <span className="material-symbols-outlined text-white text-4xl mb-4 block">{item.icon}</span>
                <h4 className="text-white font-black text-lg mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community Pulse ── */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-high border-4 border-outline p-12 relative">
            <div className="absolute -top-6 -left-6 bg-tertiary text-black font-black px-6 py-2 border-4 border-black rotate-[-3deg] text-sm uppercase">
              COMMUNITY_PULSE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
              <div className="md:col-span-2 space-y-8">
                <h3 className="font-headline font-black text-4xl uppercase">The Community Pulse</h3>
                <div className="space-y-6">
                  {communityVotes.map((item) => (
                    <div key={item.title}>
                      <div className="flex justify-between font-black mb-2 text-sm">
                        <span>{item.title}</span>
                        <span className={`text-${item.color}`}>+{item.pct}% Voted</span>
                      </div>
                      <div className="w-full h-8 bg-black border-2 border-outline">
                        <div
                          className={`h-full bg-${item.color} shadow-[inset_0px_4px_10px_rgba(0,0,0,0.5)] transition-all duration-1000`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black border-2 border-outline p-6 flex flex-col justify-center text-center space-y-4">
                <div className="text-6xl font-black text-white">
                  {Object.values(votes).reduce((a, b) => a + b, 0).toLocaleString()}
                </div>
                <div className="text-tertiary font-headline uppercase tracking-widest text-sm">Total Votes Cast</div>
                <p className="text-sm text-on-surface-variant">Community votes drive what surfaces on the board.</p>
                <Link
                  to="/library"
                  className="w-full py-4 bg-tertiary text-black font-black uppercase shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all block text-center"
                >
                  VOTE_NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners Strip ── */}
      <section className="py-16 border-y-4 border-outline bg-surface overflow-hidden">
        <p className="text-center text-on-surface-variant font-label text-xs uppercase tracking-[0.3em] mb-8">Trusted by builders worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 px-8">
          {ecosystemPartnerNames.map((name) => (
            <div key={name} className="font-headline font-black text-2xl tracking-tighter border-2 border-white/40 px-4 py-2 text-white">
              {name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
