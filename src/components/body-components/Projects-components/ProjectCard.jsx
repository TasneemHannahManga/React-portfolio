import React from "react";

function ProjectCard(props) {
  return (
    <a href={props.link}>
      <img
        className="project-img"
        style={{
          border: props.darkness ? "solid 2px #69ffbc" : "solid 2px #226500",
          boxShadow: props.darkness
            ? "10px 10px 0 #69ffbc"
            : "10px 10px 0 #226500",
        }}
        src={props.image}
        alt={props.desc}
      ></img>
    </a>
  );
}

export default ProjectCard;
