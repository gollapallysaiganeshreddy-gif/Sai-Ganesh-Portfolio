import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { Github } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/profile';

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  }, [filter]);

  const featured = filtered.find((project) => project.featured) || filtered[0];
  const others = filtered.filter((project) => project.id !== featured?.id);

  return (
    <section id="projects" className="section-wrap">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <SectionHeading
            overline="Projects"
            title="Model work and product experiments"
            subtitle="A curated view of systems, prototypes, and full-stack ideas with a clear outcome."
          />

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-2 text-xs muted-text uppercase tracking-[0.18em]">
              <Filter size={13} />
              Filter
            </div>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`filter-pill rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                  filter === category
                    ? 'text-white border border-[rgba(64,230,179,0.24)] bg-[rgba(64,230,179,0.14)]'
                    : 'muted-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28 }}
            className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4"
          >
            {featured && (
              <article className="project-card rounded-[2rem] p-6 sm:p-8 panel-strong">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="chip rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Featured project
                  </span>
                  <span className="text-xs muted-text uppercase tracking-[0.18em]">{featured.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-4 soft-text leading-relaxed">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs muted-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {featured.github && (
                    <a href={featured.github} target="_blank" rel="noopener noreferrer" className="button-secondary">
                      <Github size={15} />
                      View code
                    </a>
                  )}
                  {featured.demo && (
                    <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="button-primary">
                      <ExternalLink size={15} />
                      Live demo
                    </a>
                  )}
                </div>
              </article>
            )}

            <div className="grid gap-4">
              {others.slice(0, 3).map((project) => (
                <article key={project.id} className="project-card rounded-[1.75rem] p-6 panel">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.18em] muted-text">
                      0{project.id} / {project.category}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--color-aurora-400)]" />
                  </div>

                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="mt-3 text-sm soft-text leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] muted-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 pt-4 border-t border-white/8">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm soft-text hover:text-white transition-colors inline-flex items-center gap-1.5">
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-aurora-400)] hover:text-white transition-colors inline-flex items-center gap-1.5 ml-auto">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
