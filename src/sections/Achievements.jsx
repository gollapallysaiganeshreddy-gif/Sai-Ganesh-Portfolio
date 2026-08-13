import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications, achievements } from '../data/profile';

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap">
      <div className="container-custom">
        <div className="mb-8">
          <p className="eyebrow mb-3">Milestones</p>
          <h2 className="section-headline font-black text-white">
            <span className="accent-text">Achievements and certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Key milestones</h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="info-card rounded-[1.5rem] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] muted-text">{item.year}</p>
                  <h4 className="mt-2 text-base font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm soft-text leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-5 inline-flex items-center gap-2">
              <Award size={18} className="text-[var(--color-aurora-400)]" />
              Verified credentials
            </h3>

            <div className="space-y-3">
              {certifications.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="panel rounded-[1.5rem] p-5 flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="mt-1 text-xs muted-text">{item.issuer} • {item.date}</p>
                  </div>
                  {item.credential && (
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-chip h-11 w-11 rounded-full shrink-0"
                      aria-label="View credential"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
