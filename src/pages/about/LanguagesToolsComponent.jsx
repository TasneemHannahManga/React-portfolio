import "./about.css";

function LanguagesToolsComponent(props) {
  return (
    <div
      style={{
        border: props.darkness ? "solid 2px #69ffbc" : "solid 2px #226500",
        boxShadow: props.darkness
          ? "10px 10px 0 #69ffbc"
          : "10px 10px 0 #226500",
      }}
      className="lang-tool-container"
    >
      <div className="lang-tool-img-container">
        <img
          loading="lazy"
          alt={props.description}
          className="lang-tool-img"
          src={
            props.darkness
              ? "./languages-and-tools/" + props.darkImage
              : "./languages-and-tools/" + props.lightImage
          }
        />
      </div>
      <p
        style={{ color: props.darkness ? "white" : "black" }}
        className="text lang-tool"
      >
        {props.text}
      </p>
    </div>
  );
}

export default LanguagesToolsComponent;
