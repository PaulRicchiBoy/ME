'use client';

import { Sparkles, Code2, Database, Wrench, TrendingUp, Globe, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Skills() {
  const skillCategories = [
    {
      title: 'Desarrollo Web',
      icon: Code2,
      skills: [
        { name: 'HTML', slug: 'html5' },
        { name: 'CSS', slug: 'css' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'TypeScript', slug: 'typescript' },
      ],
    },
    {
      title: 'Frameworks',
      icon: Code2,
      skills: [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextdotjs' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
      ],
    },
    {
      title: 'CMS',
      icon: Globe,
      skills: [
        { name: 'WordPress', slug: 'wordpress' },
        { name: 'Drupal', slug: 'drupal' },
      ],
    },
    {
      title: 'Backend & BD',
      icon: Database,
      skills: [
        { name: 'Supabase', slug: 'supabase' },
        { name: 'Node.js', slug: 'nodedotjs' },
      ],
    },

    {
      title: 'Inteligencia Artificial',
      icon: Sparkles,
      skills: [
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
      ],
    },

    {
      title: 'Herramientas SEO',
      icon: Wrench,
      skills: [
        { name: 'Google Analytics', slug: 'googleanalytics' },
        { name: 'Search Console', slug: 'googlesearchconsole' },
        { name: 'SEMrush', slug: 'semrush' },
      ],
    },
    {
      title: 'Conocimientos SEO',
      icon: TrendingUp,
      skills: [
        { name: 'SEO On-Page', slug: '' },
        { name: 'SEO Off-Page', slug: '' },
        { name: 'SEO Técnico', slug: '' },
        { name: 'Core Web Vitals', slug: '' },
        { name: 'Keyword Strategy', slug: '' },
        { name: 'UX Optimization', slug: '' },
      ],
    },
  ];

  const languages = [
    { name: 'Español', level: 'Nativo', percentage: 100 },
    { name: 'Inglés', level: 'Intermedio', percentage: 60 },
  ];

  return (
    <section id="habilidades" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-[-4px] leading-none">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgb(103,232,249)]">
              HABILIDADES
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-slate-900/70 backdrop-blur-3xl border border-cyan-400/30 rounded-3xl p-10 shadow-2xl shadow-cyan-500/30"
        >
          <div className="space-y-14">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-widest">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-slate-800/80 hover:bg-slate-700/90 px-5 py-4 rounded-2xl border border-transparent hover:border-cyan-400 transition-all group"
                    >
                      {skill.image ? (
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={42}
                          height={42}
                          className="transition-all group-hover:scale-110 rounded-lg"
                        />
                      ) : skill.slug ? (
                        <img
                          src={`https://cdn.simpleicons.org/${skill.slug}`}
                          alt={skill.name}
                          width={42}
                          height={42}
                          className="transition-all group-hover:scale-110"
                        />
                      ) : (
                        <span className="text-4xl text-cyan-400">★</span>
                      )}
                      <span className="text-slate-100 font-semibold text-lg">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Idiomas */}
          <div className="mt-16 pt-12 border-t border-cyan-400/30">
            <div className="flex items-center gap-4 mb-8">
              <Languages className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white tracking-wide">Idiomas</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-xl font-semibold text-slate-200">{lang.name}</span>
                    <span className="text-cyan-300 font-medium">{lang.level}</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
}