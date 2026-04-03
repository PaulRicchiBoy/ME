'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experiencia');
      if (!experienceSection) return;

      const scrollY = window.scrollY;
      const experienceTop = experienceSection.offsetTop;

      // Aparece después de la sección experiencia
      setShowFloatingBtn(scrollY > experienceTop + 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Escuchar evento global para abrir modal
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

        {/* BOTÓN FLOTANTE "CREAR PROYECTO" - CON ANIMACIÓN MEJORADA */}
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
          {/* Círculo interior con efecto neón */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all" />
          
          {/* Icono + animado */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300 relative z-10">
            <span className="text-4xl font-black text-slate-950 leading-none">+</span>
          </div>
          
          {/* Texto con efecto glow */}
          <span className="text-[10px] font-black text-cyan-400 font-mono tracking-widest mt-1 relative z-10 drop-shadow-[0_0_5px_#22d3ee]">
            CREAR
          </span>
        </motion.button>
      </section>

      {/* ==================== MODAL 2x2 NEÓN ==================== */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[10000] p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="bg-slate-950 border border-cyan-400/40 rounded-3xl w-full max-w-md mx-auto relative overflow-hidden shadow-2xl shadow-cyan-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fondos neón */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#22d3ee_0%,transparent_55%)] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#a855f7_0%,transparent_55%)] opacity-20" />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 z-20 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 p-8 sm:p-10">
              <div className="text-center mb-10">
                <h3 className="text-4xl sm:text-5xl font-black tracking-tighter bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ¡HABLEMOS!
                </h3>
                <p className="text-slate-400 mt-2 text-sm">Elige cómo quieres contactarme</p>
              </div>

              {/* Grid 2x2 */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {/* Correo */}
                <a
                  href="mailto:waldiamio16000@gmail.com"
                  className="group flex flex-col items-center gap-4 hover:scale-105 active:scale-95 transition-all"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img 
                      src="/gmail.svg" 
                      alt="Correo" 
                      className="w-20 h-20 drop-shadow-[0_0_25px_rgb(103,232,249)]"
                    />
                  </div>
                  <span className="font-semibold text-white text-xl tracking-wide">Correo</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/51902675860?text=Hola%2C%20soy%20Program%20Factory.%20Dime%20tus%20pr%C3%B3ximas%20ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 hover:scale-105 active:scale-95 transition-all"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img 
                      src="/whatsapp-svg.svg" 
                      alt="WhatsApp" 
                      className="w-20 h-20 drop-shadow-[0_0_25px_rgb(16,185,129)]"
                    />
                  </div>
                  <span className="font-semibold text-white text-xl tracking-wide">WhatsApp</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/PaulRicchiBoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 hover:scale-105 active:scale-95 transition-all"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <svg className="w-20 h-20 text-slate-300 group-hover:text-white transition-colors drop-shadow-[0_0_20px_rgb(148,163,184)]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-white text-xl tracking-wide">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/paul-ccopa-a95367361/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 hover:scale-105 active:scale-95 transition-all"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <svg className="w-20 h-20 text-blue-400 group-hover:text-blue-300 transition-colors drop-shadow-[0_0_20px_rgb(59,130,246)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-white text-xl tracking-wide">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="border-t border-cyan-400/20 py-5 text-center">
              <p className="text-xs text-slate-500 font-mono tracking-widest">NEON • ELECTRIC • READY</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}