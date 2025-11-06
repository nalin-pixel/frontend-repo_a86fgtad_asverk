import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Event() {
  return (
    <section id="event" className="relative bg-[#f7f1e3] py-20 text-[#3b2e2a]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Event Schedule & Location
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border-2 border-amber-700/30 bg-white p-6 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-amber-700" />
              <div className="font-semibold">Sunday, 17 August 2025</div>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Clock className="h-5 w-5 text-amber-700" />
              <div>10:00 AM - 2:00 PM</div>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-amber-700" />
              <div>Balai Kota Yogyakarta, Indonesia</div>
            </div>
            <p className="mt-4 text-sm text-[#6b4f43]">
              Traditional Javanese ceremony followed by a reception. Dress code: Batik or formal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl border-2 border-amber-700/30 shadow-xl"
          >
            <iframe
              title="Google Map"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.232251700553!2d110.365!3d-7.835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a9b4f1b9a9%3A0x9e7f5e2a2c9a6!2sYogyakarta!5e0!3m2!1sen!2sid!4v1700000000000"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-[url('https://i.imgur.com/6a1rQwq.png')] bg-repeat opacity-30" aria-hidden />
    </section>
  );
}
