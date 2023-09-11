import React from 'react';
import * as styles from './modules/project.module.css';

type projects = {
  id: string;
  title: string;
  link: string;
};

type ProjectsProps = {
  header: string;
  projects: projects[];
};

const Projects = ({ header, projects }: ProjectsProps): React.JSX.Element => {
  return (
    <section className={styles.projects}>
      <h3 className={styles.projectHeader}>{header}</h3>
      <ul className={styles.projectList}>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <a className={styles.projectLink} href={project.link}>
                {project.title}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
