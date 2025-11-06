import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1513] py-12 text-amber-100">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto mb-6 h-[2px] w-full max-w-3xl bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-amber-200/90"
        >
          With heartfelt gratitude, we thank you for your blessings and presence.
        </motion.p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a className="rounded-full border border-amber-300/30 p-2 hover:bg-amber-50/10" href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a className="rounded-full border border-amber-300/30 p-2 hover:bg-amber-50/10" href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a className="rounded-full border border-amber-300/30 p-2 hover:bg-amber-50/10" href="#" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-6 text-sm text-amber-200/60">© 2025 Aisyah & Raka Wedding</p>
      </div>
    </footer>
  );
}
