import "./projects.css";

function ProjectCard(props) {
  return (
    <a href={props.link}>
      <img
        loading="lazy"
        className="project-img"
        style={{
          border: props.darkness ? "solid 2px #69ffbc" : "solid 2px #226500",
          boxShadow: props.darkness
            ? "10px 10px 0 #69ffbc"
            : "10px 10px 0 #226500",
        }}
        src={props.source}
        srcSet={`${props.lowres} 480w, ${props.highres} 1024w`}
        sizes="(width <= 700px) 480px,
         1024px"
        alt={props.desc}
      ></img>
    </a>
  );
}

export default ProjectCard;
