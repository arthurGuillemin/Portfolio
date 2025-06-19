import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Me contacter</h1>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:aguillemin291@gmail.com">aguillemin291@gmail.com</a>
        </div>

        <div className={styles.infoItem}>
          <FaPhone className={styles.icon} />
          <span>+33 6 95 90 67 32</span>
        </div>

        <div className={styles.infoItem}>
          <FaLinkedin className={styles.icon} />
          <a href="https://www.linkedin.com/in/arthur-guillemin-3855bb239/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>

        <div className={styles.infoItem}>
          <FaGithub className={styles.icon} />
          <a href="https://github.com/arthurGuillemin" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
