import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/profile';

const iconMap = {
  Programming: Code2,
  'AI / ML': BrainCircuit,
  'Data Science': Database,
  'Web Development': Code2,
  Databases: Database,
  'Developer Tools': Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0]?.category || '');
  const active = skills.find((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section-wrap">
      <div className="container-custom">
        <SectionHeading
          overline="Skills"
          title="The toolkit behind the experiments"
          subtitle="This is the stack I actually reach for when moving from an idea, to a model, to a product."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategory(group.category)}
              className={`filter-pill rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] ${
                activeCategory === group.category
                  ? 'text-white border border-[rgba(64,230,179,0.24)] bg-[rgba(64,230,179,0.14)]'
                  : 'muted-text'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {active.items.map((skill, index) => {
                const Icon = iconMap[active.category] || Wrench;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03, duration: 0.24 }}
                    className="skill-card rounded-[1.6rem] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-base font-bold text-white">{skill.name}</h4>
                        <p className="mt-1 text-xs muted-text uppercase tracking-[0.16em]">{active.category}</p>
                      </div>
                      <div className="icon-chip">
                        <Icon size={16} />
                      </div>
                    </div>

                    <div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-aurora-500)] to-cyan-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs muted-text">
                      <span>Capability</span>
                      <span>{skill.level}%</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
