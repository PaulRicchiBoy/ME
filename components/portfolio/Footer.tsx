'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Agrega esta definición de tipo
type TechLogo = {
  name: string;
  slug?: string;
  image?: string;
};

export function Footer() {
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
    { name: 'Automatizaciones', image: '/automatizaciones.jpg' },
    { name: 'Bots', image: '/bots.png' },
    { name: 'Google Analytics', slug: 'googleanalytics' },
    { name: 'Search Console', slug: 'googlesearchconsole' },
    { name: 'SEMrush', slug: 'semrush' },
  ];

  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-slate-950 border-t border-cyan-400/30 py-3 z-50 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* === CARRUSEL MAJESTUOSO ULTRA DELGADO + NEON === */}
        <div>
          <motion.div
            className="flex items-center gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 22,           // VELOCIDAD RÁPIDA
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900/90 backdrop-blur-3xl border border-cyan-400/30 rounded-3xl hover:border-cyan-400 transition-all min-w-[145px] justify-center group relative overflow-hidden"
              >
                {/* Efecto de luz neon interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo exactamente como en Skills */}
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 relative z-10">
                  {logo.image ? (
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={28}
                      height={28}
                      className="transition-all group-hover:scale-110 object-contain drop-shadow-[0_0_8px_rgb(103,232,249)]"
                    />
                  ) : logo.slug ? (
                    <img
                      src={`https://cdn.simpleicons.org/${logo.slug}`}
                      alt={logo.name}
                      width={28}
                      height={28}
                      className="transition-all group-hover:scale-110 drop-shadow-[0_0_8px_rgb(103,232,249)]"
                    />
                  ) : null}
                </div>
                
                <span className="font-semibold text-slate-100 text-sm tracking-wider relative z-10">
                  {logo.name}
                </span>

                <div className="absolute -inset-px rounded-3xl border border-transparent group-hover:border-cyan-400/50 group-hover:shadow-[0_0_35px_-8px] group-hover:shadow-cyan-400 transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}