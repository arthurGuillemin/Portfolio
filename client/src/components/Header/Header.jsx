import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Tech Stack', href: '/stack' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((o) => !o);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} aria-label="Logo">
        <a href='/'><span>A</span><span>r</span><span>t</span><span>h</span><span>u</span><span>r</span>
        <span></span>
        <span>G</span><span>u</span><span>i</span><span>l</span><span>l</span><span>e</span><span>m</span><span>i</span><span>n</span>
        </a>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        {navItems.map(({ label, href }, i) => (
          <a
            key={href}
            href={href}
            style={{ animationDelay: `${i * 0.12}s` }}
            onClick={() => setMenuOpen(false)}
          >
            {label}
            <span className={styles.underline}></span>
          </a>
        ))}
      </nav>

      <button
        aria-label="Toggle menu"
        className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
