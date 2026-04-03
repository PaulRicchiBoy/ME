'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingButton() {
  const [showButton, setShowButton] = useState(true); // Cambiado a true para que aparezca inmediatamente
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener todas las secciones
      const heroSection = document.getElementById('inicio');
      const experienceSection = document.getElementById('experiencia');
      
      if (!experienceSection || !heroSection) return;
      
      const scrollY = window.scrollY;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const experienceTop = experienceSection.offsetTop;
      
      // El botón aparece desde el principio (Hero) y desaparece solo cuando pasa Experience
      // Se oculta solo después de pasar la sección Experiencia
      const shouldShow = scrollY < experienceTop - 100;
      
      setShowButton(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Escuchar evento global para abrir modal
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);
    
    // Ejecutar una vez al montar
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactModal', handleOpenModal);
    };
  }, []);

  return (
    <>
      {/* Botón flotante animado - RESPONSIVE - Aparece desde el Hero */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={() => setIsModalOpen(true)}
            initial={{ opacity: 0, scale: 0.3, x: 100, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                duration: 0.6,
                delay: 0.3 // Pequeño delay para que aparezca después del Hero
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.3, 
              x: 100, 
              y: 100,
              transition: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-[9999] group cursor-pointer"
          >
            {/* Efecto de aura externa */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            
            {/* Círculo principal - TAMAÑOS RESPONSIVE */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
              
              {/* Fondo de brillo interno */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Anillo de neón pulsante */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping opacity-50" />
              
              {/* Icono + animado - TAMAÑOS RESPONSIVE */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 0, 180, 180] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50"
                >
                  <span className="text-2xl sm:text-3xl md:text-3xl font-black text-white leading-none">+</span>
                </motion.div>
                
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-cyan-400 font-mono tracking-[1px] sm:tracking-[2px] mt-0.5 sm:mt-1 drop-shadow-[0_0_5px_#22d3ee]">
                  CREAR
                </span>
              </div>
            </div>
            
            {/* Texto flotante en hover - solo desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ opacity: 1, x: -70 }}
              className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap pointer-events-none"
            >
              <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 rounded-full px-4 py-2 shadow-lg shadow-cyan-500/30">
                <span className="text-cyan-300 font-bold text-sm tracking-wide">
                  CREAR NUEVO PROYECTO ✨
                </span>
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ==================== MODAL 2x2 NEÓN - RESPONSIVE ==================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[10000] p-3 sm:p-4 md:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-400/40 rounded-2xl sm:rounded-3xl w-[95%] sm:w-full max-w-md mx-auto relative overflow-hidden shadow-2xl shadow-cyan-500/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fondos neón animados */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#22d3ee_0%,transparent_55%)] opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#a855f7_0%,transparent_55%)] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Líneas decorativas */}
              <div className="absolute top-0 left-0 w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110 hover:rotate-90 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="text-center mb-6 sm:mb-8 md:mb-10">
                  <motion.h3 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    ¡HABLEMOS!
                  </motion.h3>
                  <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Elige cómo quieres contactarme</p>
                </div>

                {/* Grid 2x2 - RESPONSIVE */}
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-10 md:gap-y-12">
                  {/* Correo */}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    href="mailto:waldiamio16000@gmail.com"
                    className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:shadow-[0_0_20px_rgb(103,232,249)] transition-all duration-300">
                      <img 
                        src="/gmail.svg" 
                        alt="Correo" 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 drop-shadow-[0_0_10px_rgb(103,232,249)]"
                        onError={(e) => {
                          e.currentTarget.src = 'https://cdn.simpleicons.org/gmail';
                        }}
                      />
                    </div>
                    <span className="font-semibold text-white text-base sm:text-lg md:text-xl tracking-wide group-hover:text-cyan-300 transition-colors">Correo</span>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    href="https://wa.me/51902675860?text=Hola%2C%20soy%20Program%20Factory.%20Dime%20tus%20pr%C3%B3ximas%20ideas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:shadow-[0_0_20px_rgb(16,185,129)] transition-all duration-300">
                      <img 
                        src="/whatsapp-svg.svg" 
                        alt="WhatsApp" 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 drop-shadow-[0_0_10px_rgb(16,185,129)]"
                        onError={(e) => {
                          e.currentTarget.src = 'https://cdn.simpleicons.org/whatsapp';
                        }}
                      />
                    </div>
                    <span className="font-semibold text-white text-base sm:text-lg md:text-xl tracking-wide group-hover:text-green-400 transition-colors">WhatsApp</span>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    href="https://github.com/PaulRicchiBoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:shadow-[0_0_20px_rgb(148,163,184)] transition-all duration-300">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-slate-300 group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgb(148,163,184)]" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-white text-base sm:text-lg md:text-xl tracking-wide group-hover:text-slate-300 transition-colors">GitHub</span>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href="https://www.linkedin.com/in/paul-ccopa-a95367361/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:shadow-[0_0_20px_rgb(59,130,246)] transition-all duration-300">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-400 group-hover:text-blue-300 transition-colors drop-shadow-[0_0_10px_rgb(59,130,246)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-white text-base sm:text-lg md:text-xl tracking-wide group-hover:text-blue-400 transition-colors">LinkedIn</span>
                  </motion.a>
                </div>
              </div>

              <div className="border-t border-cyan-400/20 py-3 sm:py-4 md:py-5 text-center bg-slate-900/50">
                <p className="text-[10px] sm:text-xs text-slate-500 font-mono tracking-widest animate-pulse">
                  ⚡ READY TO CREATE ⚡
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}