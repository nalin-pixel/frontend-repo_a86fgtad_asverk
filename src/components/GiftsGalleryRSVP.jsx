import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, GalleryHorizontalEnd, Mail } from 'lucide-react';

const galleryImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922203-b34c9af066f7?q=80&w=1200&auto=format&fit=crop',
];

export default function GiftsGalleryRSVP() {
  return (
    <section className="bg-[#221b18] py-20 text-amber-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <GiftCard />
          <Gallery />
          <RSVPForm />
        </div>
      </div>
    </section>
  );
}

function GiftCard() {
  const [copied, setCopied] = useState(false);
  const text = 'BCA 1234567890 - Aisyah Putri';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-amber-400/30 bg-gradient-to-b from-[#2a221f] to-[#1f1916] p-6 shadow-xl"
    >
      <h3 className="text-2xl font-semibold text-amber-200">Digital Gifts</h3>
      <p className="mt-2 text-amber-100/90">
        Your presence is the greatest gift. For those who wish to send a blessing, you may use the details below.
      </p>
      <div className="mt-4 rounded-xl bg-[#312622] p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="truncate text-amber-100">{text}</div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-50/10 px-3 py-2 text-sm text-amber-100 hover:bg-amber-50/20"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="mt-4 text-sm text-amber-200/80">
        E-Wallet: GoPay 0812-3456-7890 • OVO 0812-9876-5432
      </div>
    </motion.div>
  );
}

function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-2xl font-semibold text-amber-200"
      >
        Gallery
      </motion.h3>
      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setLightbox(src)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group overflow-hidden rounded-lg"
            aria-label="Open image"
          >
            <img src={src} alt={`Gallery ${i + 1}`} className="h-24 w-full object-cover transition duration-300 group-hover:scale-105" />
          </motion.button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={lightbox} alt="Selected" className="max-h-[80vh] w-auto rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}

function RSVPForm() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2200);
        formRef.current?.reset();
      }}
      className="rounded-2xl border border-amber-400/30 bg-gradient-to-b from-[#2a221f] to-[#1f1916] p-6 shadow-xl"
    >
      <h3 className="text-2xl font-semibold text-amber-200">RSVP</h3>
      <div className="mt-4 grid grid-cols-1 gap-3">
        <input required name="name" placeholder="Full Name" className="rounded-lg border border-amber-300/30 bg-[#312622] px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
        <input required name="email" type="email" placeholder="Email" className="rounded-lg border border-amber-300/30 bg-[#312622] px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
        <select name="guests" className="rounded-lg border border-amber-300/30 bg-[#312622] px-3 py-2 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400/40">
          <option value="1">Attending: 1</option>
          <option value="2">Attending: 2</option>
          <option value="3">Attending: 3</option>
        </select>
        <textarea name="message" rows="3" placeholder="Leave a message" className="rounded-lg border border-amber-300/30 bg-[#312622] px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
        <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2 font-medium text-[#2a221f] hover:bg-amber-500">
          <Mail className="h-4 w-4" /> Send RSVP
        </button>
      </div>

      {submitted && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-4 rounded-lg border border-amber-300/30 bg-amber-100/10 p-3 text-amber-100"
        >
          Thank you for your RSVP! We look forward to celebrating together.
        </motion.div>
      )}
    </motion.form>
  );
}
