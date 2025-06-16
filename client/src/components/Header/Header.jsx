import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navlinks}>
      <a href="#">Home</a>
      <a href="#">About me</a>
      <a href="#">Tech Stack</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
  );
}

export default Header;
