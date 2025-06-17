import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import ProfilePic from '/Profile.png';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function Home() {
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
          showDots: true          
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className={styles.HeroSection} ref={vantaRef}>
      <div className={styles.Content}>
        <div className={styles.TextBlock}>
          <p className={styles.Greeting}>Hi 👋,</p>
          <p className={styles.Intro}>My name is</p>
          <h1 className={styles.Name}>Arthur Guillemin</h1>
          <p className={styles.Role}>I build things for the web</p>
          <p className={styles.Role}>🎓 Web development student @ <a href='https://www.hetic.net/formations/bachelor-web' target="_blank">HETIC</a> — Looking for a 3rd-year apprenticeship</p>
      
          <p className={styles.Tagline}>
            Passionate about creating impactful user experiences and backend architectures.
          </p>
          <div className={styles.Buttons}>
            <a href="/projects" className={styles.PrimaryButton}>View Projects</a>
            <a href="/contact" className={styles.SecondaryButton}>Contact Me</a>
          </div>
          <div className={styles.Socials}>
            <a href="https://github.com/arthurGuillemin" target="_blank">
              <img src="/github-mark.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/arthur-guillemin-3855bb239/" target="_blank" >
              <img src="/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className={styles.ProfilePicWrapper}>
          <img src={ProfilePic} alt="Arthur Guillemin" className={styles.ProfilePic} />
        </div>
      </div>

      <div className={styles.Wave}></div>
    </section>
  );
}

export default Home;
