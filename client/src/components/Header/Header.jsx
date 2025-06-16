import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navlinks}>
      <a href="/">Home</a>
      <a href="/About">About me</a>
      <a href="/Stack">Tech Stack</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default Header;
