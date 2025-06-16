import { useEffect, useRef, useState } from 'react';
import styles from './WorkInProgress.module.css';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function WorkInProgress() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4F81F2,
          backgroundColor: 0xfdfdfd,
          points: 12.0,
          maxDistance: 25.0,
          spacing: 18.0,
          showDots: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className={styles.WorkSection} ref={vantaRef}>
      <div className={styles.Centered}>
        <h1 className={styles.Title}>🚧 Work in Progress</h1>
        <p className={styles.Text}>This page is currently under construction. Come back soon!</p>
      </div>
    </section>
  );
}

export default WorkInProgress;
