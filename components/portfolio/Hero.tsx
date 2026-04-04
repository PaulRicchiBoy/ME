'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MobilButton } from '@/components/portfolio/MobilButton';   // ← Import agregado

export function Hero() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experiencia');
      if (!experienceSection) return;

      const scrollY = window.scrollY;
      const experienceTop = experienceSection.offsetTop;

      setShowFloatingBtn(scrollY > experienceTop + 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactModal', handleOpenModal);
    };
  }, []);

  return (
    <>
      <section
        id="inicio"
        className="min-h-screen flex items-center relative overflow-hidden bg-slate-950 pt-20 sm:pt-24 md:pt-24"
      >
        {/* VIDEO DE FONDO */}
        <video
          src="/hero-video.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/75 to-black/85 z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px] opacity-20 z-20" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 md:gap-16 items-center relative z-40 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)]">
          
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="md:col-span-7 space-y-6 md:space-y-12 text-left"
          >
            <div className="space-y-2">
              <motion.div className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-slate-900/70 backdrop-blur-3xl border border-cyan-400/30 rounded-3xl">
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-300 font-medium tracking-[2px] text-xs sm:text-sm">
                  DESARROLLADOR WEB DINÁMICO • ESPECIALISTA SEO
                </span>
              </motion.div>

              <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-black tracking-[-3px] md:tracking-[-5px] leading-[1.05]">
                <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  Paul Waldir
                </span>
              </motion.h1>

              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
                Ccopa Arenas
              </motion.h1>
            </div>

            <motion.p className="max-w-[50%] md:max-w-lg mx-0 text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-left">
              Desarrollador web dinámico y especialista en SEO. Utilizo Inteligencia Artificial para automatizar procesos, crear contenido de alto valor, generar imágenes y videos. Creo animaciones fluidas, implemento las últimas tecnologías modernas y ejecuto estrategias avanzadas de posicionamiento que hacen que tu marca domine los buscadores.
            </motion.p>
          </motion.div>

          {/* BOTÓN CV */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end pt-8 md:pt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.a
              href="/cv.pdf"
              download="cv.pdf"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center cursor-pointer"
              animate={{ y: [0, 28, 28, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.55, 0.62, 1] }}
            >
              <Image
                src="/CVP.png"
                alt="Descargar CV"
                width={460}
                height={460}
                className="w-80 h-80 md:w-[420px] md:h-[420px] object-contain transition-all duration-300"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* BOTÓN FLOTANTE "CREAR PROYECTO" (el que ya tenías) */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          initial={{ opacity: 0, scale: 0.5, y: 80 }}
          animate={{ 
            opacity: showFloatingBtn ? 1 : 0, 
            scale: showFloatingBtn ? 1 : 0.5,
            y: showFloatingBtn ? 0 : 80 
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-[9999] flex flex-col items-center justify-center w-20 h-20 bg-slate-900 border-2 border-cyan-400 rounded-full shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:border-cyan-300 transition-all group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300 relative z-10">
            <span className="text-4xl font-black text-slate-950 leading-none">+</span>
          </div>
          <span className="text-[10px] font-black text-cyan-400 font-mono tracking-widest mt-1 relative z-10 drop-shadow-[0_0_5px_#22d3ee]">
            CREAR
          </span>
        </motion.button>

        {/* ←←← BOTÓN VISTA MÓVIL (solo en Hero) ←←← */}
        <MobilButton />

      </section>

      {/* ==================== MODAL 2x2 NEÓN (tu modal de contacto) ==================== */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[10000] p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          {/* ... todo tu modal actual sin cambios ... */}
          {/* (lo dejo igual que lo tenías) */}
        </motion.div>
      )}
    </>
  );
}