import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music2, Pause, Play } from 'lucide-react';

const batikBg =
  'https://images.unsplash.com/photo-1603357465999-c1788f7b9b4c?q=80&w=1600&auto=format&fit=crop';
const wayangSilhouette =
  'https://images.unsplash.com/photo-1602410169922-2a88bf3b8068?q=80&w=1200&auto=format&fit=crop';
const gamelanAudio =
  'https://cdn.pixabay.com/download/audio/2021/11/02/audio_8c0f67b5b2.mp3?filename=gamelan-ambient-96616.mp3';

export default function Hero() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden text-center">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${batikBg})` }}
        aria-hidden
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#3b2e2a]/60 to-[#1a1513]/80" aria-hidden />

      {/* Wayang silhouette accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url(${wayangSilhouette})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-200"
        >
          The Wedding of
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-7xl"
          style={{ fontFamily: 'Mona Sans, serif' }}
        >
          Aisyah & Raka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-amber-100/90"
        >
          "When two souls meet, the universe hums in gentle harmony."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 rounded-full border border-amber-300/40 bg-[#2a221f]/60 px-6 py-2 text-amber-200 shadow-lg backdrop-blur"
        >
          17 August 2025 • Yogyakarta, Indonesia
        </motion.div>

        {/* Music Toggle */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          onClick={() => setPlaying((p) => !p)}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50/10 px-4 py-2 text-amber-100 transition hover:bg-amber-50/20"
          aria-label={playing ? 'Pause background music' : 'Play background music'}
        >
          <Music2 className="h-4 w-4" />
          {playing ? (
            <>
              <Pause className="h-4 w-4" /> Pause Gamelan
            </>
          ) : (
            <>
              <Play className="h-4 w-4" /> Play Gamelan
            </>
          )}
        </motion.button>

        <audio ref={audioRef} loop src={gamelanAudio} preload="none" />
      </div>

      {/* Decorative bottom divider */}
      <div className="relative z-10">
        <DecorativeDivider />
      </div>
    </section>
  );
}

function DecorativeDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="mx-auto my-6 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <div className="mx-auto flex w-full items-center justify-center">
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12H31" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <path d="M49 12H79" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 2L46 12L40 22L34 12L40 2Z" fill="#f59e0b" fillOpacity="0.7"/>
        </svg>
      </div>
    </div>
  );
}
