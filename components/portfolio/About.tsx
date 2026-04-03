'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      image: '/ia.png',
      title: 'Inteligencia Artificial',
      description: 'Trabajando con lo último en tecnología: automatizaciones inteligentes con IA, creación de contenido, generación de imágenes y videos',
    },
    {
      image: '/crecimiento.png',
      title: 'Crecimiento Digital',
      description: 'Estrategias que multiplican la visibilidad y el alcance de marcas',
    },
    {
      image: '/sector.png',
      title: 'Emprende tu Negocio Turístico',
      description: 'Ventas online, marketing digital, redes sociales, catálogos y publicidad estratégica para el sector turismo',
    },
    {
      image: '/TecnologiaModerna.png',
      title: 'Tecnología Moderna',
      description: 'Animaciones fluidas + desarrollo web de última generación',
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="relative py-16 md:py-24 bg-slate-950 overflow-hidden"
    >
      {/* BACKGROUND FUTURISTA */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* TÍTULO NEON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-3px] md:tracking-[-4px] leading-none">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgb(103,232,249)]">
              SOBRE MÍ
            </span>
          </h2>
          <motion.div
            className="w-36 md:w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_25px_rgb(103,232,249)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* === PERFIL PROFESIONAL - CAJA GRANDE === */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="md:col-span-7"
          >
            <div className="bg-slate-900/70 backdrop-blur-3xl border border-cyan-400/40 rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/30 hover:border-cyan-400/70 transition-all">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide text-center md:text-left">
                Perfil Profesional
              </h3>

              {/* Video grande con neon */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-cyan-400 mb-8 bg-slate-950">
                <video
                  src="/videoabout.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                />
                {/* Glow neon animado */}
                <motion.div
                  className="absolute inset-0 border-4 border-cyan-400 rounded-3xl pointer-events-none"
                  animate={{ boxShadow: ['0 0 15px #22d3ee', '0 0 45px #22d3ee', '0 0 15px #22d3ee'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Texto */}
              <div className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  Desarrollador web dinámico y <span className="text-cyan-400 font-medium">especialista en SEO</span>. 
                  Creo animaciones fluidas, implemento tecnologías modernas y ejecuto estrategias de posicionamiento 
                  que hacen que tu marca domine los buscadores y crezca en internet.
                </p>
                <p>
                  Especializado en el sector turismo y marketing digital. Combino SEO técnico avanzado, 
                  desarrollo web de última generación y creatividad para generar resultados reales y sostenibles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* === HIGHLIGHTS - TARJETAS === */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="md:col-span-5 grid grid-cols-2 gap-5 md:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group bg-slate-900/70 backdrop-blur-3xl border border-cyan-400/40 rounded-3xl p-5 md:p-6 hover:border-cyan-400/80 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all flex flex-col h-full"
              >
                <div className="relative w-full aspect-square mb-5 md:mb-6 rounded-3xl overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400/80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 160px"
                  />
                  <motion.div
                    className="absolute inset-0 border-4 border-cyan-400 rounded-3xl pointer-events-none"
                    animate={{ boxShadow: ['0 0 12px #22d3ee', '0 0 35px #22d3ee', '0 0 12px #22d3ee'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                <h4 className="font-bold text-xl md:text-2xl text-white text-center mb-3 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-center text-sm md:text-[15px] leading-relaxed flex-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* LÍNEA DE LUZ INFERIOR */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-[700px] h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
}