import { Heart } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';
import { socialLinks, profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8">
      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm muted-text text-center md:text-left">
          © {new Date().getFullYear()} {profile.name}. Built with{' '}
          <Heart size={12} className="inline text-[var(--color-aurora-400)]" /> AI curiosity and React.
        </p>
        <div className="flex items-center gap-3">
          <a className="social-pill h-11 w-11 rounded-full inline-flex items-center justify-center" href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a className="social-pill h-11 w-11 rounded-full inline-flex items-center justify-center" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a className="social-pill h-11 w-11 rounded-full inline-flex items-center justify-center" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
