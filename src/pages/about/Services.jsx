import "./about.css";

function Services(props) {
  return (
    <div
      style={{
        border: props.darkness ? "solid 2px #69ffbc" : "solid 2px #226500",
        boxShadow: props.darkness
          ? "10px 10px 0 #69ffbc"
          : "10px 10px 0 #226500",
      }}
      className="service-container"
    >
      <p
        style={{ color: props.darkness ? "white" : "black" }}
        className="service-title"
      >
        {props.title}
      </p>
    </div>
  );
}

export default Services;
