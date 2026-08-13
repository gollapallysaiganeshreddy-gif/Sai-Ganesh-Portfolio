import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../components/SocialIcons';
import { profile, socialLinks } from '../data/profile';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-wrap pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-4 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="contact-card rounded-[1.6rem] p-6 sm:p-7 space-y-5"
          >
            <div>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="text-3xl font-black text-white leading-tight">
                Let&apos;s build something smart.
              </h2>
              <p className="mt-3 soft-text">
                Open to collaborations, AI engineering roles, and product-focused software work.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="icon-chip">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] muted-text">Email</p>
                <a href={`mailto:${profile.email}`} className="text-base font-semibold text-white hover:text-[var(--color-aurora-400)] transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="icon-chip">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] muted-text">Location</p>
                <p className="text-base font-semibold text-white">{profile.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <Github size={15} />
                GitHub
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <Twitter size={15} />
                Twitter
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="form-card rounded-[1.6rem] p-6 sm:p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="panel rounded-2xl p-4 block">
                <span className="block text-[11px] uppercase tracking-[0.18em] muted-text mb-2">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>

              <label className="panel rounded-2xl p-4 block">
                <span className="block text-[11px] uppercase tracking-[0.18em] muted-text mb-2">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </label>
            </div>

            <label className="panel rounded-2xl p-4 block">
              <span className="block text-[11px] uppercase tracking-[0.18em] muted-text mb-2">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you're building."
              />
            </label>

            <button type="submit" className="button-primary w-full sm:w-auto px-6 py-3.5">
              <Send size={15} />
              Send message
            </button>

            {submitted && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-300">
                Message sent successfully. I’ll reply soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
