'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-3xl border-b border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          
          {/* === LOGO EN CÍRCULO === */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="relative w-14 h-14 rounded-full border-2 border-cyan-400/50 overflow-hidden flex items-center justify-center bg-slate-900 hover:border-cyan-400 transition-all">
              <Image
                src="/logo.png"
                alt="Paul Waldir Logo"
                width={52}
                height={52}
                className="object-contain drop-shadow-[0_0_15px_rgb(103,232,249)]"
                priority
              />
            </div>
          </motion.div>

          {/* === MENÚ DESKTOP === */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-10">
            {[
              { label: 'INICIO', id: 'inicio' },
              { label: 'SOBRE MÍ', id: 'sobre-mi' },
              { label: 'EXPERIENCIA', id: 'experiencia' },
              { label: 'HABILIDADES', id: 'habilidades' },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-slate-300 hover:text-white font-medium tracking-[2px] text-lg transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500" />
              </motion.button>
            ))}
          </div>

          {/* === BOTÓN MENÚ MÓVIL === */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-3 rounded-2xl border border-cyan-400/40 hover:border-cyan-400 hover:bg-cyan-950/70 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7 text-cyan-300" /> : <Menu className="h-7 w-7 text-cyan-300" />}
          </motion.button>
        </div>
      </div>

      {/* === MENÚ MÓVIL CORREGIDO Y RESPONSIVE === */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="md:hidden fixed inset-0 top-[73px] bg-slate-950/95 backdrop-blur-3xl z-50 flex flex-col items-center justify-center px-6"
        >
          <div className="flex flex-col items-center gap-8 w-full max-w-xs text-center">
            {[
              { label: 'INICIO', id: 'inicio' },
              { label: 'SOBRE MÍ', id: 'sobre-mi' },
              { label: 'EXPERIENCIA', id: 'experiencia' },
              { label: 'HABILIDADES', id: 'habilidades' },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-4xl font-black tracking-widest text-slate-300 hover:text-cyan-400 py-4 w-full border-b border-cyan-400/30 hover:border-cyan-400 transition-all"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}