import { motion } from 'framer-motion';

export default function SectionHeading({ overline, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`mb-10 ${align === 'center' ? 'text-center mx-auto' : 'text-left'}`}
    >
      {overline && <p className="eyebrow mb-3">{overline}</p>}
      <h2 className="section-headline font-black text-white">
        <span className="accent-text">{title}</span>
      </h2>
      {subtitle && <p className="section-copy mt-4">{subtitle}</p>}
    </motion.div>
  );
}
