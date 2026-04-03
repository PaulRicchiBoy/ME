'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, X } from 'lucide-react';

type TechLogo = {
  name: string;
  slug?: string;
  image?: string;
};

export function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techLogos: TechLogo[] = [
    { name: 'HTML', slug: 'html5' },
    { name: 'CSS', slug: 'css' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextdotjs' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'WordPress', slug: 'wordpress' },
    { name: 'Drupal', slug: 'drupal' },
    { name: 'Supabase', slug: 'supabase' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'ChatGPT', image: '/chatgpt.jpg' },
    { name: 'Quillbot Premium', image: '/quillbot-.jpg' },
    { name: 'Grok', image: '/grok-1.svg' },
    { name: 'Super Grok', image: '/super grok.png' },
    { name: 'Midjourney', image: '/midjourney.svg' },
    { name: 'Suno', slug: 'suno' },
    { name: 'Flow', image: '/flow.png' },
    { name: 'Envato', slug: 'envato' },
    { name: 'Freepik Premium', slug: 'freepik' },
    { name: 'Bots', image: '/bots.png' },
    { name: 'Google Analytics', slug: 'googleanalytics' },
    { name: 'Search Console', slug: 'googlesearchconsole' },
    { name: 'SEMrush', slug: 'semrush' },
  ];

  const duplicatedLogos = [...techLogos, ...techLogos];

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experiencia');
      if (experienceSection) {
        setShowFooter(window.scrollY > experienceSection.offsetTop - 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.footer
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: showFooter ? 0 : 80, opacity: showFooter ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-cyan-400/30 py-2 md:py-3 overflow-hidden z-[9999] pointer-events-none"
        style={{ pointerEvents: showFooter ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-purple-950/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showFooter ? 1 : 0, y: showFooter ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-3"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/90 backdrop-blur-3xl border border-cyan-400/40 rounded-3xl hover:border-cyan-400/70 transition-all shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-[-2px] leading-none">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CREAR NUEVO PROYECTO
                </span>
              </motion.h3>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgb(103,232,249)]"
              >
                +
              </motion.div>
            </button>
          </motion.div>

          {/* Carrusel de tecnologías */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showFooter ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <motion.div
              className="flex items-center gap-3 md:gap-5 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-center gap-1.5  bg-gradient-to-br from-slate-950 via-blue-950/70 to-purple-950/60 backdrop-blur-3xl border border-cyan-400/30 hover:border-cyan-400 rounded-3xl min-w-[100px] md:min-w-[115px] group relative overflow-hidden shadow-xl shadow-cyan-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/20 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400/70 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_-2px] group-hover:shadow-cyan-400 transition-all">
                      {logo.image ? (
                        <Image 
                          src={logo.image} 
                          alt={logo.name} 
                          width={30} 
                          height={30} 
                          className="rounded-full object-contain transition-all group-hover:scale-110 drop-shadow-[0_0_8px_rgb(103,232,249)]" 
                        />
                      ) : logo.slug ? (
                        <img 
                          src={`https://cdn.simpleicons.org/${logo.slug}`} 
                          alt={logo.name} 
                          width={30} 
                          height={30} 
                          className="rounded-full object-contain transition-all group-hover:scale-110 drop-shadow-[0_0_8px_rgb(103,232,249)]" 
                        />
                      ) : null}
                    </div>
                  </div>

                  <span className="font-semibold text-slate-300 text-[10px] md:text-xs tracking-wider text-center leading-none">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>

      {/* ==================== MODAL 2x2 NEÓN - CORREGIDO ==================== */}
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
              <X className="w-7 h-7" />
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
                      onError={(e) => console.error("No se pudo cargar: /gmail.svg")}
                    />
                  </div>
                  <span className="font-semibold text-white text-xl tracking-wide">Correo</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/51902675860?text=Hola%2C%20soy%Program%20Factory.%20Dime%20tus%20pr%C3%B3ximas%20ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 hover:scale-105 active:scale-95 transition-all"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img 
                      src="/whatsapp-svg.svg" 
                      alt="WhatsApp" 
                      className="w-20 h-20 drop-shadow-[0_0_25px_rgb(16,185,129)]"
                      onError={(e) => console.error("No se pudo cargar: /whatsapp.svg")}
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
                  <div className="w-20 h-20 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                    <Github className="w-20 h-20 drop-shadow-[0_0_20px_rgb(148,163,184)]" />
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
                  <div className="w-20 h-20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Linkedin className="w-20 h-20 drop-shadow-[0_0_20px_rgb(59,130,246)]" />
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