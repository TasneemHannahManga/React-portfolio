import React from "react";
import ProjectCard from "./ProjectCard";
import projectslist from "./projectslist";

function Projects(props) {
  return (
    <div id="projects">
      <h2
        style={{ color: props.darkness ? "	 #69ffbc" : "	 #226500" }}
        className="projects-title section-title"
      >
        Projects
      </h2>
      <div className="projects-container">
        <ProjectCard
          link={projectslist[2].link}
          image={projectslist[2].screenshot}
          desc={projectslist[2].alt}
          darkness={props.darkness}
        />
      </div>
    </div>
  );
}

export default Projects;
