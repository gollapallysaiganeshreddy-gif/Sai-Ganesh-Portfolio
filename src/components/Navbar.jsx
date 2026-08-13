import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks, profile } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function Navbar({ isDark, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds, 120);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
      <div className="container-custom">
        <div className="glass-nav rounded-[1.5rem] px-4 sm:px-5 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="icon-chip h-11 w-11 rounded-[1rem]">
              <span className="font-black text-sm tracking-[0.18em]">S</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">{profile.name}</p>
              <p className="text-[11px] muted-text">AI / ML portfolio</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={link.href}
                  className={`relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all ${
                    isActive
                      ? 'text-white bg-[rgba(64,230,179,0.12)] border border-[rgba(64,230,179,0.2)]'
                      : 'muted-text hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={profile.resumeUrl} download className="hidden sm:inline-flex button-primary py-2.5 px-4 text-xs">
              <Download size={14} />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[rgba(64,230,179,0.28)] hover:bg-[rgba(64,230,179,0.08)] transition-colors inline-flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[rgba(64,230,179,0.28)] hover:bg-[rgba(64,230,179,0.08)] transition-colors inline-flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden mt-3 panel rounded-[1.5rem] p-4"
            >
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const id = link.href.replace('#', '');
                  const isActive = activeId === id;
                  return (
                    <a
                      key={id}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] ${
                        isActive
                          ? 'text-white bg-[rgba(64,230,179,0.12)] border border-[rgba(64,230,179,0.2)]'
                          : 'muted-text bg-white/5 border border-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <a href={profile.resumeUrl} download className="mt-3 button-primary w-full py-3 text-sm">
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
