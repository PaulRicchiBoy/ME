'use client';

import { motion } from 'framer-motion';

export function Footer() {
  // Lista de logos expandida con TODAS las tecnologías del Skills + originales
  const techLogos = [
    { name: 'HTML', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', color: 'from-yellow-400 to-amber-500' },
    { name: 'TypeScript', color: 'from-blue-500 to-cyan-600' },
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', color: 'from-slate-300 to-slate-100' },
    { name: 'Tailwind', color: 'from-cyan-400 to-teal-400' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
    { name: 'Supabase', color: 'from-emerald-400 to-teal-500' },
    { name: 'WordPress', color: 'from-blue-600 to-indigo-600' },
    { name: 'Drupal', color: 'from-purple-500 to-violet-600' },
    { name: 'Framer Motion', color: 'from-pink-400 to-purple-400' },
    { name: 'Vercel', color: 'from-slate-200 to-white' },
    { name: 'Shopify', color: 'from-green-400 to-emerald-500' },
    { name: 'Figma', color: 'from-purple-400 to-pink-400' },
    { name: 'ChatGPT', color: 'from-emerald-400 to-teal-500' },
    { name: 'Grok', color: 'from-slate-400 to-zinc-300' },
    { name: 'Midjourney', color: 'from-violet-400 to-purple-500' },
    { name: 'Suno', color: 'from-amber-400 to-orange-500' },
    { name: 'SEMrush', color: 'from-red-400 to-rose-500' },
    { name: 'Google Analytics', color: 'from-blue-400 to-red-400' },
    { name: 'Search Console', color: 'from-blue-500 to-yellow-400' },
    { name: 'Quillbot', color: 'from-purple-400 to-pink-400' },
    { name: 'Envato', color: 'from-teal-400 to-cyan-500' },
    { name: 'Freepik', color: 'from-pink-400 to-rose-400' },
  ];

  // Duplicamos para carrusel infinito suave
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-400/30 py-12 overflow-hidden">
      {/* Fondo sutil cyber */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* === CARRUSEL INFINITO MÁS BONITO Y COMPLETO === */}
        <div className="mb-12">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 40,           // un poco más lento para que se aprecie mejor
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className={`inline-flex items-center gap-3 px-8 py-5 bg-slate-900/80 backdrop-blur-3xl border border-cyan-400/20 rounded-3xl hover:border-cyan-400/60 hover:shadow-[0_0_35px_-10px] hover:shadow-cyan-400 transition-all min-w-[190px] justify-center`}
              >
                {/* Icono con gradiente */}
                <div
                  className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${logo.color} flex items-center justify-center text-white font-bold text-2xl shadow-inner`}
                >
                  {logo.name === 'HTML' && '⟨/⟩'}
                  {logo.name === 'CSS' && '🎨'}
                  {logo.name === 'JavaScript' && 'JS'}
                  {logo.name === 'TypeScript' && 'TS'}
                  {logo.name === 'React' && '⚛️'}
                  {logo.name === 'Next.js' && '▲'}
                  {logo.name === 'Tailwind' && 'TW'}
                  {logo.name === 'Node.js' && '🟢'}
                  {logo.name === 'Supabase' && 'S'}
                  {logo.name === 'WordPress' && 'WP'}
                  {logo.name === 'Drupal' && 'D'}
                  {logo.name === 'Framer Motion' && 'FM'}
                  {logo.name === 'Vercel' && '▲'}
                  {logo.name === 'Shopify' && '🛍️'}
                  {logo.name === 'Figma' && '◼️'}
                  {logo.name === 'ChatGPT' && '🤖'}
                  {logo.name === 'Grok' && 'G'}
                  {logo.name === 'Midjourney' && '🌌'}
                  {logo.name === 'Suno' && '♪'}
                  {logo.name === 'SEMrush' && '📈'}
                  {logo.name === 'Google Analytics' && '📊'}
                  {logo.name === 'Search Console' && '🔍'}
                  {logo.name === 'Quillbot' && '✍️'}
                  {logo.name === 'Envato' && '📦'}
                  {logo.name === 'Freepik' && '🖼️'}
                </div>
                <span className="font-semibold text-slate-200 text-lg tracking-wide">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* === LÍNEA SEPARADORA NEON === */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mb-8" />

        {/* === INFO FINAL DEL FOOTER === */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p className="mb-4 md:mb-0">
            © 2025 Paul Waldir Ccopa Arenas • Todos los derechos reservados
          </p>
          <p className="flex items-center gap-6">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Términos</span>
            <span className="text-cyan-400 font-medium">Hecho con 🔥 en Cusco, Perú</span>
          </p>
        </div>
      </div>
    </footer>
  );
}