import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, type Category } from '@/config/site';
import { allProducts } from '@/config/data';

const shadowColors: Record<string, string> = {
  primary: 'rgba(168,85,247,1)',
  secondary: 'rgba(34,211,238,1)',
  tertiary: 'rgba(163,230,53,1)',
};

export default function Library() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [search, setSearch] = useState('');
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());

  const categories: Category[] = ['ALL', ...siteConfig.categories];

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat = activeCategory === 'ALL' || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const toggleBookmark = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <main className="pt-28 pb-24 px-6 md:px-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <span className="text-tertiary font-label font-bold text-sm uppercase tracking-widest mb-4 block">Product Index</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter">
              THE <span className="text-primary">LIBRARY</span>
            </h1>
            <p className="text-on-surface-variant mt-4 max-w-lg">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} indexed. Discover, vote, and deploy the tools shaping the next internet.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-high border-2 border-outline px-4 py-3 flex items-center gap-2 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 font-label uppercase tracking-widest w-48 placeholder:text-on-surface-variant text-sm"
                placeholder="SEARCH PRODUCTS..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button onClick={() => setSearch('')} className="text-on-surface-variant hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 font-headline font-black text-sm uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-black shadow-[4px_4px_0px_0px_#ffffff]'
                  : 'border-2 border-outline hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-32 border-2 border-dashed border-outline">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">search_off</span>
            <p className="font-headline font-black text-2xl uppercase text-on-surface-variant">No products found</p>
            <button onClick={() => { setSearch(''); setActiveCategory('ALL'); }} className="mt-6 border-2 border-primary text-primary px-8 py-3 font-black uppercase hover:bg-primary hover:text-black transition-all">
              CLEAR FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-surface-container border-2 border-outline p-2 group flex flex-col transition-all"
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `12px 12px 0px 0px ${shadowColors[product.color]}`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
              >
                <div className="aspect-video overflow-hidden border-2 border-black mb-4 bg-black relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={product.title}
                    src={product.img}
                  />
                  {product.verified && (
                    <div className="absolute top-3 right-3">
                      <span className="material-symbols-filled text-tertiary drop-shadow-lg">verified</span>
                    </div>
                  )}
                  <div className={`absolute top-3 left-3 bg-black/70 text-${product.color} font-label font-bold text-xs px-2 py-1 uppercase tracking-widest`}>
                    {product.category}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-headline font-black text-xl uppercase group-hover:text-${product.color} transition-colors`}>
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-outline">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-secondary text-sm">download</span>
                        <span className="font-bold">{product.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-filled text-primary text-sm">star</span>
                        <span className="font-bold">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleBookmark(e, product.id)}
                        className={`p-2 border-2 transition-all ${bookmarked.has(product.id) ? 'border-primary bg-primary/20' : 'border-black bg-surface-container-highest hover:border-primary'}`}
                      >
                        <span className={`material-symbols-${bookmarked.has(product.id) ? 'filled' : 'outlined'} text-sm ${bookmarked.has(product.id) ? 'text-primary' : ''}`}>
                          bookmark
                        </span>
                      </button>
                      <button className="bg-white text-black font-black py-2 px-4 text-sm border-2 border-black shadow-[3px_3px_0px_0px_#777575] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                        GET
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="text-center mt-16">
            <button className="border-4 border-outline px-12 py-4 font-headline font-black uppercase hover:border-primary hover:text-primary transition-colors">
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
