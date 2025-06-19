import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import styles from './ProjectCard.module.css';
import linkIcon from '/link-chain-hyperlink-svgrepo-com.svg';

function ProjectCard({ imgSrc, title, description, stack, link, codeLink }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0,
          color: 0xff0086,
          backgroundAlpha: 0.10

          
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={styles.cardContainer} ref={vantaRef}>
      <div className={styles.cardContent}>
        <img src={imgSrc} alt={title} className={styles.image} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <div className={styles.stack}>
          <h2>Tech stack</h2>
          <p>{stack}</p>
        </div>

        <div className={styles.linkContainer}>
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <img src="/github-mark.svg" alt="GitHub" className={styles.icon} />
              <span>View code</span>
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <img src={linkIcon} alt="Link" className={styles.icon} />
              <span>Live preview</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
