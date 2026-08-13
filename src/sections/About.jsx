import { motion } from 'framer-motion';
import { profile, stats, domainCards } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import { Brain, Code2, BarChart3, Lightbulb } from 'lucide-react';

const iconMap = { Brain, Code2, BarChart3, Lightbulb };

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4 items-start">
          <SectionHeading
            overline="About"
            title="Building intelligent systems with clear product thinking"
            subtitle="I like work that sits between data and shipping. That usually means models that are understandable, interfaces that are useful, and code that is maintainable."
          />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {domainCards.map((card) => {
                const Icon = iconMap[card.icon] || Lightbulb;
                return (
                  <div key={card.title} className="feature-card rounded-[1.5rem] p-5">
                    <div className="icon-chip mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm soft-text leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] p-5 bg-[rgba(64,230,179,0.06)] border border-[rgba(64,230,179,0.12)]">
              <div className="grid gap-4 md:grid-cols-2">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph} className="soft-text leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] muted-text">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
