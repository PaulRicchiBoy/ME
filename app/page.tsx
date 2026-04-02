'use client';

import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Experience } from '@/components/portfolio/Experience';
import { Skills } from '@/components/portfolio/Skills';

import { Navigation } from '@/components/portfolio/Navigation';
import { ThemeProvider } from '@/components/portfolio/ThemeProvider';
import { Footer } from '@/components/portfolio/Footer';
import Preloader from '@/components/portfolio/Preloader';  // ← NUEVO

export default function Home() {
  return (
    <ThemeProvider>
      {/* === PANTALLA DE CARGA CON ANIMACIÓN === */}
      <Preloader />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
        <Navigation />
        
        <main>
          <Hero />
          <About />          
          <Skills />
          <Experience />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}