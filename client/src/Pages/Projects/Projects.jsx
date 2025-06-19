import ProjectCard from '../../components/ProjectCard/ProjectCard';
import WorkInProgress from '../../components/WorkInProgress/Work';
import ProfilePic from '/Profile.png';
import eutopia from '/eutopia.png'
import GomiImage from '/Gomi.png'
import storybook from '/storybook.png'
import gitImage from '/git.jpg'
import styles from './Projects.module.css';
function Projects() {
  return (
    <>
    <div className={styles.CardsContainer}>
    <ProjectCard imgSrc={gitImage} title="Git from Scratch" description="--PROJET EN COURS-- Recréation des commandes principales de Git en Python (init, commit, log…) pour mieux comprendre son fonctionnement interne. Projet pédagogique structuré autour des commandes plumbing et porcelain." stack="Python" codeLink="https://github.com/arthurGuillemin/hetic_git" />
    <ProjectCard imgSrc={GomiImage} title="Gomi"  description="Application éco-responsable de gestion des déchets, qui guide les utilisateurs dans le tri, la collecte et le recyclage local. Gomi propose aussi des défis ludiques pour encourager de meilleurs gestes écologiques."  stack="React ,  Flask , SUPABASE"  link="https://gomiproject.netlify.app/" codeLink="https://github.com/arthurGuillemin/Gomi" />
    <ProjectCard imgSrc={eutopia} title="Eutopia" description="Jeu mobile collaboratif créé lors du hackathon HETIC × Publicis, où nous avons terminé 2ᵉ. Le projet vise à rapprocher les jeunes européens via des quiz et défis ludiques." stack="React Native, Expo, Node.js, Supabase" codeLink="https://github.com/arthurGuillemin/Youth_Game" />
    <ProjectCard imgSrc={storybook} title="Design System" description="Système de composants UI scalable avec Vite, PostCSS et Storybook, déployé sur Netlify pour documentation interactive. Composants réutilisables et responsives." stack="React, Vite, Storybook, PostCSS" link="https://bloomdesignsystemstorybook.netlify.app/" codeLink="https://github.com/arthurGuillemin/design_system" />
    </div>
    </>
  );
}

export default Projects;