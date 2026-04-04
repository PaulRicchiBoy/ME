'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al pasar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Bloquear scroll cuando menú móvil está abierto
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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  // Secciones sin INICIO
  const menuItems = [
    { label: 'SOBRE MÍ', id: 'sobre-mi' },
    { label: 'EXPERIENCIA', id: 'experiencia' },
    { label: 'HABILIDADES', id: 'habilidades' },
  ];

  return (
    <>
      {/* NAV BAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/95 backdrop-blur-3xl border-b border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* LOGO + PROGRAM FACTORY (izquierda) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center gap-3 shrink-0"
            onClick={() => scrollToSection('inicio')}
          >
            {/* Logo circular */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400/50 overflow-hidden flex items-center justify-center bg-slate-900 hover:border-cyan-400 transition-all">
              <Image
                src="/logo.jpg"
                alt="Program Factory Logo"
                width={48}
                height={48}
                className="object-contain drop-shadow-[0_0_15px_rgb(103,232,249)]"
                priority
              />
            </div>

            {/* Texto PROGRAM FACTORY */}
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-[3px] text-2xl sm:text-3xl text-white">PROGRAM</span>
              <span className="font-black tracking-[3px] text-2xl sm:text-3xl text-cyan-400 -mt-1">FACTORY</span>
            </div>
          </motion.div>

          {/* MENÚ DESKTOP (derecha) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {menuItems.map((item) => (
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

          {/* BOTÓN MENÚ MÓVIL */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-3 rounded-2xl border border-cyan-400/40 hover:border-cyan-400 hover:bg-cyan-950/70 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-cyan-300" /> : <Menu className="h-6 w-6 text-cyan-300" />}
          </motion.button>
        </div>
      </nav>

      {/* MENÚ MÓVIL (100% responsive) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-16 left-0 right-0 bottom-0 z-[99] md:hidden"
          >
            {/* Fondo oscuro */}
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Panel del menú */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl border-l border-cyan-400/30"
            >
              <div className="flex flex-col h-full pt-8 pb-12 px-6 overflow-y-auto">
                <div className="flex flex-col gap-3">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection(item.id)}
                      className="group text-left text-3xl font-bold tracking-wider text-slate-200 hover:text-cyan-400 py-6 px-6 rounded-2xl hover:bg-cyan-950/40 transition-all"
                    >
                      {item.label}
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