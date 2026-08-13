import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <div className="container-custom">
        <SectionHeading
          overline="Education"
          title="Academic groundwork"
          subtitle="The formal layer underneath the AI and software work, kept intentionally concise and readable."
        />

        <div className="grid lg:grid-cols-2 gap-4">
          {education.map((item, index) => (
            <motion.article
              key={`${item.institution}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="info-card rounded-[1.6rem] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="icon-chip">
                      <GraduationCap size={18} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{item.degree}</h3>
                  </div>
                  <p className="mt-2 soft-text">{item.institution}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] muted-text">
                  <CalendarDays size={13} />
                  {item.duration}
                </div>
              </div>

              <div className="mt-5 inline-flex rounded-full bg-[rgba(64,230,179,0.08)] border border-[rgba(64,230,179,0.12)] px-3 py-1 text-xs text-white">
                {item.grade}
              </div>

              {item.highlights.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm soft-text">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-aurora-400)] shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
