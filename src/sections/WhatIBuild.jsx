import { motion } from 'framer-motion';
import { Brain, Code2, BarChart3, Globe, Zap, Network } from 'lucide-react';
import { whatIBuild } from '../data/profile';

const iconMap = { Brain, Code2, BarChart3, Globe, Zap };

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="section-wrap">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="eyebrow justify-center mb-3">Specializations</p>
          <h2 className="section-headline font-black text-white">
            <span className="accent-text">What I build</span>
          </h2>
          <p className="section-copy mx-auto mt-4">
            The portfolio covers the areas I care about most: AI systems, data products, and useful software that people can actually use.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-aurora-500)] to-cyan-300 text-slate-950 font-black text-xs mx-auto mb-10 shadow-[0_0_40px_rgba(64,230,179,0.25)]">
            <div className="flex flex-col items-center gap-1">
              <Network size={20} />
              <span>CORE</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatIBuild.map((item, index) => {
              const Icon = iconMap[item.icon] || Code2;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="feature-card rounded-[1.6rem] p-6"
                >
                  <div className="icon-chip mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm soft-text leading-relaxed">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
