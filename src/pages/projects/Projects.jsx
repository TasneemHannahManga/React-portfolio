import "./projects.css";
import ProjectCard from "./ProjectCard";
import projectslist from "./projectslist";

function Projects(props) {
  return (
    <section id="projects">
      <h3
        style={{ color: props.darkness ? "	 #69ffbc" : "	 #226500" }}
        className="projects-title section-title"
      >
        Projects
      </h3>
      <div className="projects-container">
        {projectslist.map((project) => (
          <ProjectCard
            key={project.id}
            source={project.source}
            highres={project.highres}
            lowres={project.lowRes}
            link={project.link}
            desc={project.alt}
            darkness={props.darkness}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
