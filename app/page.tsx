'use client';

import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Experience } from '@/components/portfolio/Experience';
import { Skills } from '@/components/portfolio/Skills';
import { Navigation } from '@/components/portfolio/Navigation';
import { Footer } from '@/components/portfolio/Footer';
import Preloader from '@/components/portfolio/Preloader';
import { FloatingButton } from '@/components/portfolio/FloatingButton';

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
      
      {/* Botón flotante que aparece ANTES de la sección experiencia */}
      <FloatingButton />
    </>
  );
}