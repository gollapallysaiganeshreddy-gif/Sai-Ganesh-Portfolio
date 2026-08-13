import { motion } from 'framer-motion';
import { ArrowRight, Download, BrainCircuit, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { profile, socialLinks, stats } from '../data/profile';

const signals = [
  'Research-driven AI / ML builds',
  'Clean software systems with product focus',
  'Fast iteration from idea to launch',
];

export default function Hero() {
  return (
    <section id="home" className="section-wrap pt-28 md:pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="panel-strong rounded-[2rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,230,179,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(124,127,255,0.12),transparent_30%)]" />
            <div className="relative">
              <div className="chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {profile.status}
              </div>

              <p className="eyebrow mb-4">AI / ML + software</p>
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white">
                <span className="accent-text">{profile.name}</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold soft-text max-w-2xl">
                {profile.title}
              </p>
              <p className="mt-6 section-copy text-base sm:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="button-primary">
                  Explore work
                  <ArrowRight size={16} />
                </a>
                <a href={profile.resumeUrl} download className="button-secondary">
                  <Download size={16} />
                  Download resume
                </a>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {signals.map((item) => (
                  <div key={item} className="metric-card rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="icon-chip h-10 w-10 rounded-2xl shrink-0">
                        <Sparkles size={16} />
                      </div>
                      <p className="text-sm soft-text leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="panel rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="eyebrow">Research dashboard</p>
                <span className="text-[11px] muted-text uppercase tracking-[0.18em]">Open to roles</span>
              </div>

              <div className="grid gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="metric-card rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-xs muted-text uppercase tracking-[0.16em] mt-1">{stat.label}</p>
                    </div>
                    <BrainCircuit size={18} className="text-[var(--color-aurora-400)]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-strong rounded-[1.5rem] p-5">
              <p className="text-sm font-semibold text-white mb-2">Now exploring</p>
              <div className="space-y-2 text-sm soft-text">
                <p>Applied machine learning for product insights</p>
                <p>Conversational AI and automation workflows</p>
                <p>Visual analytics and data storytelling</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-pill inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs">
                  <Github size={14} />
                  GitHub
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs">
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
