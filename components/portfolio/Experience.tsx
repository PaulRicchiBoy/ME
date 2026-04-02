'use client';

import { Briefcase, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  const companies = [
    'SEO DOM',
    'Host SEO Cusco',
    'Creativa Lima',
    'Innoteam',
    'Machupicchu Peru Travel',
    'Qori Qilqa',
  ];

  const responsibilities = [
    'Optimización SEO on-page y SEO técnico',
    'Investigación de palabras clave (keyword research)',
    'Optimización de velocidad web y experiencia de usuario',
    'Gestión y optimización de sitios web en CMS',
    'Implementación de mejoras de posicionamiento orgánico',
    'Análisis de tráfico web y rendimiento SEO',
  ];

  return (
    <section
      id="experiencia"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* === BACKGROUND FUTURISTA (igual que Hero y About) === */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* === TÍTULO NEON ÉPICO === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-[-3px] leading-none">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgb(103,232,249)]">
              EXPERIENCIA
            </span>
          </h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8 rounded-full shadow-[0_0_30px_rgb(103,232,249)]"
          />
        </motion.div>

        {/* === TARJETA PRINCIPAL HOLOGRÁFICA === */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
          className="max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-3xl border border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-700"
        >
          {/* Header con glow */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 p-8 relative">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 shadow-inner">
                <Briefcase className="w-9 h-9 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white tracking-tight">
                  Especialista SEO &amp; Desarrollo Web
                </h3>
                <p className="text-cyan-100 text-2xl font-medium">Marketing Digital • Turismo</p>
              </div>
            </div>

            {/* Scan line sutil en header */}
            <motion.div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="p-10">
            {/* === EMPRESAS CON LAS QUE HE TRABAJADO (neon badges) === */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h4 className="text-cyan-300 font-medium tracking-[2px] text-xl mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400"></span>
                EMPRESAS CON LAS QUE HE TRABAJADO
                <span className="h-px flex-1 bg-cyan-400"></span>
              </h4>

              <div className="flex flex-wrap gap-4 justify-center">
                {companies.map((company, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="px-7 py-3 text-lg font-semibold bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 text-slate-200 hover:text-white border border-cyan-400/30 hover:border-cyan-400 rounded-3xl transition-all shadow-md hover:shadow-[0_0_25px_-5px] hover:shadow-cyan-400"
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* === RESPONSABILIDADES (lista futurista) === */}
            <div>
              <h4 className="text-cyan-300 font-medium tracking-[2px] text-xl mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400"></span>
                FUNCIONES REALIZADAS
                <span className="h-px flex-1 bg-cyan-400"></span>
              </h4>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {responsibilities.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="group flex items-start gap-6"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgb(103,232,249)]">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-300 text-xl leading-relaxed pt-1">
                      {task}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* === LÍNEA DE LUZ INFERIOR === */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[620px] h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>
    </section>
  );
}