'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  // Lista EXACTA de logos (igual que en Hero)
  const techLogos = [ /* ... copia la misma lista que puse arriba en Hero ... */ ];

  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-slate-950 border-t border-cyan-400/30 py-3 z-50 overflow-hidden">
      {/* Fondo sutil cyber */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CARRUSEL MAJESTUOSO ULTRA DELGADO + NEON */}
        <div>
          <motion.div
            className="flex items-center gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {/* ... mismo bloque de tarjetas que tenías antes (con neon glow) ... */}
            {/* (puedes copiar el bloque de divs del footer anterior que te di) */}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}