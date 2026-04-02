'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState<'pyf' | 'pyw'>('pyf');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cambia de fase
    const timer1 = setTimeout(() => setStage('pyw'), 1800);

    // Barra de progreso estilo videojuego (llena en 4.6 segundos)
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2.2, 100));
    }, 100);

    // Finaliza el preloader
    const timer2 = setTimeout(() => {
      setVisible(false);
      clearInterval(interval);
    }, 4600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, []);

  const mainText = "ESTÁS LISTO PARA TU PRÓXIMA IDEA";
  const subText = "Program Factory • Paul Arenas";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all"
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {/* === VIDEO DE FONDO COMPLETO === */}
          <video
            src="/hero-video-preloader.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* === OVERLAY OSCURO PREMIUM === */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/80 to-black/90 z-10" />

          {/* Fondo partículas sutiles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(165,85,247,0.15),transparent)] z-20" />

          {/* === TEXTO PRINCIPAL LLAMATIVO === */}
          <div className="text-center px-6 relative z-30 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
              {mainText.split('').map((char, index) => (
                <span
                  key={index}
                  className={`inline-block text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.06em] text-white
                    ${char === ' ' ? 'w-6' : ''}
                    animate-[keyPress_0.6s_ease-in-out_forwards]
                    ${stage === 'pyw' ? 'animate-[collideBounce_0.8s_ease-in-out_forwards]' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 38}ms`,
                    textShadow: stage === 'pyf'
                      ? '0 0 25px #22d3ee, 0 0 50px #a855f7'
                      : '0 0 25px #c026d3, 0 0 50px #22d3ee',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-8 text-3xl md:text-4xl font-medium text-cyan-300 tracking-wide"
            >
              {subText}
            </motion.p>
          </div>

          {/* === BARRA DE CARGA ESTILO VIDEOJUEGO === */}
          <div className="relative z-30 mt-20 w-full max-w-md px-6">
            <div className="flex justify-between text-xs font-mono text-cyan-300 mb-2">
              <span>LOADING SYSTEM</span>
              <span>{Math.floor(progress)}%</span>
            </div>
            
            {/* Barra exterior */}
            <div className="h-3 bg-slate-900/80 border border-cyan-400/50 rounded-full overflow-hidden backdrop-blur-md">
              {/* Barra interior que se llena */}
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_20px_#22d3ee] relative"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              >
                {/* Brillo interno de la barra */}
                <div className="absolute inset-0 bg-white/30 animate-[pulse_1s_infinite]" />
              </motion.div>
            </div>

            {/* Efecto de scanline en la barra */}
            <div className="text-center text-[10px] font-mono text-cyan-400/70 tracking-[2px] mt-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              INITIALIZING NEXT IDEA...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}