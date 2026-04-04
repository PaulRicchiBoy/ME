'use client';

import { useState } from 'react';
import { Smartphone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobilButton() {
  const [isOpen, setIsOpen] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      {/* BOTÓN FLOTANTE - Solo en pantallas grandes */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="absolute top-28 right-8 z-[200] hidden lg:flex items-center gap-3 
                   bg-slate-900 hover:bg-cyan-500 text-white px-6 py-3 
                   rounded-3xl shadow-2xl shadow-cyan-500/30 border border-cyan-400/30 
                   hover:border-cyan-400 transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <Smartphone className="w-6 h-6" />
        <span className="font-medium tracking-widest text-sm">VISTA MÓVIL</span>
      </motion.button>

      {/* MODAL CELULAR - MENOS ALTURA + SIGUE SIENDO RESPONSIVE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-[540px] mx-auto max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Marco del celular - MENOS ALTURA */}
              <div className="relative bg-black rounded-[78px] p-6 shadow-2xl border-8 border-black h-fit max-h-[88vh]">
                {/* Notch + cámara */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-36 h-5 bg-black rounded-full z-10 flex items-center justify-center">
                  <div className="w-24 h-3 bg-slate-900 rounded-full" />
                </div>

                {/* Pantalla del celular - Más corta */}
                <div className="bg-slate-950 rounded-[60px] overflow-hidden relative h-[460px] sm:h-[500px] md:h-[540px]">
                  <iframe
                    src={currentUrl}
                    className="w-[390px] sm:w-[410px] md:w-[420px] h-full mx-auto mt-1 scale-[0.97] origin-top"
                    title="Vista móvil"
                    style={{ transform: 'scale(0.97)' }}
                  />

                  {/* Barra navegación Android */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-36 h-1 bg-slate-400/30 rounded-full" />
                </div>
              </div>

              {/* Botón cerrar */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Etiqueta */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono tracking-widest text-cyan-300/70">
                ANDROID PREVIEW
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}