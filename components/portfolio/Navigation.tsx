'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al redimensionar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-3xl border-b border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            
            {/* === LOGO EN CÍRCULO === */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer shrink-0"
              onClick={() => scrollToSection('inicio')}
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cyan-400/50 overflow-hidden flex items-center justify-center bg-slate-900 hover:border-cyan-400 transition-all">
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
            <div className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-10">
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
                  className="group relative text-slate-300 hover:text-white font-medium tracking-[2px] text-base lg:text-lg transition-colors"
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
              className="md:hidden p-2 rounded-xl border border-cyan-400/40 hover:border-cyan-400 hover:bg-cyan-950/70 transition-all shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú de navegación"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-cyan-300" /> : <Menu className="h-6 w-6 text-cyan-300" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* === MENÚ MÓVIL CORREGIDO === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: '60px' }}
          >
            {/* Fondo semitransparente */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Panel del menú */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl border-l border-cyan-400/30"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'INICIO', id: 'inicio' },
                    { label: 'SOBRE MÍ', id: 'sobre-mi' },
                    { label: 'EXPERIENCIA', id: 'experiencia' },
                    { label: 'HABILIDADES', id: 'habilidades' },
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className="group relative text-left text-3xl font-bold tracking-wider text-slate-300 hover:text-cyan-400 py-4 px-6 rounded-xl hover:bg-cyan-950/30 transition-all duration-300"
                    >
                      {item.label}
                      <span className="absolute bottom-2 left-6 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-12 transition-all duration-500" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}