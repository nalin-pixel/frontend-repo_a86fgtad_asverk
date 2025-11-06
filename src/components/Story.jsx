import { motion } from 'framer-motion';

export default function Story() {
  const items = [
    {
      title: 'First Meeting',
      desc: 'We met during a cultural festival in Yogyakarta, where batik and gamelan filled the air.',
      date: '2019',
    },
    {
      title: 'The Journey',
      desc: 'Countless coffees, long talks, and weekend trips exploring temples and mountains.',
      date: '2020-2023',
    },
    {
      title: 'The Proposal',
      desc: 'Beneath the twilight of Prambanan, a promise was made with love and sincerity.',
      date: '2024',
    },
  ];

  return (
    <section id="story" className="relative bg-gradient-to-b from-[#1a1513] to-[#221b18] py-20 text-amber-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Our Story
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-xl border border-amber-300/20 bg-[#2a221f]/40 p-6 shadow-lg backdrop-blur"
            >
              <div className="mb-2 text-sm text-amber-300/80">{item.date}</div>
              <h3 className="text-xl font-semibold text-amber-200">{item.title}</h3>
              <p className="mt-2 text-amber-100/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Javanese border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-[url('https://i.imgur.com/6a1rQwq.png')] bg-repeat opacity-30" aria-hidden />
    </section>
  );
}
