'use client';

import { Briefcase, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  // AGENCIAS donde trabajé
  const agencies = [
    {
      name: "Creativa 360",
      url: "https://creativa360.pe/",
      description: "Desarrollo Frontend + SEO + Mantenimiento",
    },
    {
      name: "Dom Host SEO",
      url: "https://domhostseo.com/",
      description: "SEO Técnico + Optimización + Soporte Frontend",
    },
  ];

  // CLIENTES / Proyectos
  const clients = [
    {
      name: "Qoricancha Expeditions",
      url: "https://qoricanchaexpeditions.com/es",
      description: "Mejora SEO + Redacción + Frontend",
    },
    {
      name: "Qori Qilka",
      url: "https://www.qoriqilka.com/",
      description: "SEO Técnico + Visibilidad + Frontend",
    },
    {
      name: "Belcheri Travel",
      url: "https://belcheritravel.com/es/",
      description: "SEO On-Page + Redacción + Desarrollo",
    },
    {
      name: "Innoteam Peru",
      url: "https://innoteamperu.com/",
      description: "Optimización SEO + Frontend",
    },
    {
      name: "Quinoa Expeditions",
      url: "https://quinoaexpeditions.com/",
      description: "SEO + Contenido + Reparación Frontend",
    },
    {
      name: "Nativo Peru",
      url: "https://nativo-peru.com/",
      description: "SEO Técnico + Visibilidad",
    },
    {
      name: "Amaia Tours",
      url: "https://www.amaiatours.com/",
      description: "SEO + Redacción + Frontend",
    },
  ];

  return (
    <section
      id="experiencia"
      className="relative py-16 md:py-24 bg-slate-950 overflow-hidden pb-48 md:pb-64"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-3px] leading-none">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgb(103,232,249)]">
              EXPERIENCIA
            </span>
          </h2>
        </motion.div>

        {/* AGENCIAS DONDE TRABAJÉ */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-cyan-300 font-medium tracking-[3px] text-2xl mb-8 flex items-center gap-3 justify-center">
            <span className="h-px w-12 bg-cyan-400"></span>
            AGENCIAS DONDE TRABAJÉ
            <span className="h-px w-12 bg-cyan-400"></span>
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {agencies.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-slate-900/80 backdrop-blur-3xl border border-cyan-400/30 hover:border-cyan-400 rounded-3xl p-8 flex flex-col items-center text-center transition-all"
              >
                <div className="w-20 h-20 mb-4 rounded-2xl bg-slate-800 flex items-center justify-center border border-cyan-400/40 group-hover:border-cyan-400 overflow-hidden">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${item.url}&sz=64`}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-slate-400 text-sm mt-2">{item.description}</p>
                <ArrowRight className="w-5 h-5 text-cyan-400 mt-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CLIENTES */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-cyan-300 font-medium tracking-[3px] text-2xl mb-8 flex items-center gap-3 justify-center">
            <span className="h-px w-12 bg-cyan-400"></span>
            CLIENTES
            <span className="h-px w-12 bg-cyan-400"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-slate-900/80 backdrop-blur-3xl border border-cyan-400/30 hover:border-cyan-400 rounded-3xl p-8 flex flex-col items-center text-center transition-all"
              >
                <div className="w-20 h-20 mb-4 rounded-2xl bg-slate-800 flex items-center justify-center border border-cyan-400/40 group-hover:border-cyan-400 overflow-hidden">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${item.url}&sz=64`}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-slate-400 text-sm mt-2">{item.description}</p>
                <ArrowRight className="w-5 h-5 text-cyan-400 mt-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}