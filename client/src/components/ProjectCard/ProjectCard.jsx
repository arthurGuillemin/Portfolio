import styles from './ProjectCard.module.css'
function ProjectCard({ imgSrc, title, description, stack, link, codeLink }) {
  return (
    <div className={styles.cardContainer}>
      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Tech stack : {stack}</p>
      {link && <p>Live preview : <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>}
      <p>View code : <a href={codeLink} target="_blank" rel="noopener noreferrer">{codeLink}</a></p>
    </div>
  );
}


export default ProjectCard;