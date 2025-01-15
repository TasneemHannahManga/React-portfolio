import React from "react";

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
      <h4
        style={{ color: props.darkness ? "white" : "black" }}
        className="service-title"
      >
        {props.title}
      </h4>
    </div>
  );
}

export default Services;
