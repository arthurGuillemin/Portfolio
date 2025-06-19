import styles from './ProjectCard.module.css';
import linkIcon from '/link-chain-hyperlink-svgrepo-com.svg';

function ProjectCard({ imgSrc, title, description, stack, link, codeLink }) {
  return (
    <div className={styles.cardContainer}>
      <img src={imgSrc} alt={title} className={styles.image} />

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

      <div className={styles.stack}>
        <h2>Tech stack</h2>
        <p>{stack}</p>
      </div>

      <div className={styles.linkContainer}>
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
            <img src="/github-mark.svg" alt="GitHub" className={styles.icon} />
            <span>View code</span>
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
            <img src={linkIcon} alt="Link" className={styles.icon} />
            <span>Live preview</span>
          </a>
        )}
      </div>
    </div>
  );
}


export default ProjectCard;
