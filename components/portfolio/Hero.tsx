'use client';

import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden bg-slate-950 pt-24"
    >
      {/* === VIDEO DE FONDO COMPLETO === */}
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* === OVERLAY OSCURO === */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80 z-10" />

      {/* === BACKGROUND ULTRA PREMIUM (grid + scanlines) === */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px] opacity-20 z-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-purple-500/10 animate-[pulse_20s_ease_infinite] z-20" />

      {/* Scanlines + grid sutiles */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#00000008_0px,#00000008_3px,transparent_3px,transparent_6px)] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#00000008_0px,#00000008_3px,transparent_3px,transparent_6px)] pointer-events-none z-20" />

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <motion.div
          className="absolute top-16 left-12 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
          animate={{ y: [0, -80, 0], x: [0, 30, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-16 w-3 h-3 bg-blue-400 rounded-full blur-sm"
          animate={{ y: [0, -110, 0], x: [0, -40, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.4, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-5 h-5 bg-purple-400 rounded-full blur-sm"
          animate={{ y: [0, -60, 0], x: [0, 50, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.div
          className="absolute bottom-52 right-1/4 w-2 h-2 bg-cyan-300 rounded-full blur-sm"
          animate={{ y: [0, -90, 0], x: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-40 min-h-[calc(100vh-96px)]">
        
        {/* === TEXTO A LA IZQUIERDA === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className="md:col-span-7 space-y-12 text-left"
        >
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/70 backdrop-blur-3xl border border-cyan-400/30 rounded-3xl"
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-medium tracking-[3px] text-sm">
                DESARROLLADOR WEB DINÁMICO • ESPECIALISTA SEO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="text-7xl md:text-[92px] font-black tracking-[-5px] leading-none"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_70px_rgb(103,232,249)]">
                Paul Waldir
              </span>
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl"
            >
              Ccopa Arenas
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="max-w-lg text-slate-300 text-2xl leading-relaxed font-light tracking-wide"
          >
            Desarrollador web dinámico y especialista en SEO. Creo animaciones fluidas, implemento tecnologías modernas y ejecuto estrategias de posicionamiento que hacen que tu marca domine los buscadores y crezca en internet.
          </motion.p>

          {/* === BOTONES DESCARGAR CV Y CONTACTAR AHORA UNO AL LADO DEL OTRO === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="flex gap-6"  
          >
            <motion.div whileHover={{ scale: 1.08, y: -6 }} whileTap={{ scale: 0.95 }} className="flex-1 md:flex-none">
              <Button
                size="lg"
                className="relative w-full md:w-auto px-16 py-9 text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_70px_-15px] shadow-cyan-400 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-5">
                  <Download className="w-8 h-8" />
                  Descargar CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-180%] group-hover:translate-x-[350%] transition-transform duration-900" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08, y: -6 }} whileTap={{ scale: 0.95 }} className="flex-1 md:flex-none">
              <Button
                size="lg"
                variant="outline"
                className="relative w-full md:w-auto px-16 py-9 text-2xl font-medium border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-950/80 hover:text-white backdrop-blur-3xl transition-all hover:shadow-[0_0_60px_-10px] hover:shadow-cyan-400"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-8 h-8 mr-5" />
                Contactar ahora
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* === COLUMNA DERECHA VACÍA (limpia) === */}
        <div className="md:col-span-5 hidden md:block" />
      </div>

      {/* Línea de luz inferior */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[720px] h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent z-30" />

      {/* === ÚNICO BOTÓN WHATSAPP FLOTANTE EN LA ESQUINA INFERIOR DERECHA === */}
      <motion.a
        href="https://wa.me/51999999999" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-[0_0_40px_-8px] shadow-emerald-400 hover:shadow-emerald-300 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="white" className="drop-shadow-md">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.888-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.355L2 22l1.395-5.082a9.9 9.9 0 01-1.333-5.272C2.062 5.5 7.562 0 14.036 0 20.51 0 26 5.5 26 11.973c0 6.474-5.49 11.973-12.021 11.973" />
        </svg>
      </motion.a>
    </section>
  );
}