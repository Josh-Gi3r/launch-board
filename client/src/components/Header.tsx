import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b-4 border-white bg-black/60 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
        <Link to="/" className="text-2xl font-black text-white font-headline uppercase" onClick={() => setMenuOpen(false)}>
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-headline font-bold uppercase tracking-tighter text-sm transition-colors duration-100 ${
                isActive(link.to)
                  ? 'text-secondary border-b-2 border-secondary pb-1'
                  : 'text-white hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/submit"
            className="hidden md:block bg-primary text-black font-headline font-bold uppercase px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000] transition-all"
          >
            Submit Product
          </Link>
          <span className="material-symbols-outlined text-white text-3xl cursor-pointer hover:text-secondary transition-colors hidden md:block">
            account_circle
          </span>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col pt-24 px-8 pb-12 md:hidden">
          <div className="flex flex-col gap-6 flex-1">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`font-headline font-black text-4xl uppercase tracking-tighter transition-colors ${
                  isActive(link.to) ? 'text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/submit"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-black font-headline font-black text-xl px-8 py-5 border-2 border-black shadow-[6px_6px_0px_0px_#ffffff] text-center uppercase"
          >
            SUBMIT PRODUCT
          </Link>
        </div>
      )}
    </>
  );
}
