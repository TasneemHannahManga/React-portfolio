import React from "react";
import About from "./About-components/About";
import Projects from "./Projects-components/Projects";
import Contact from "./Contact-components/Contact";
import Banner from "../Banner";

function Body(props) {
  return (
    <>
      <Banner darkness={props.darkness} />
      <div
        className="body-container"
        style={{
          backgroundColor: props.darkness ? "black" : "white",
          height: "100%",
          border: props.darkness ? "solid #69ffbc 3px" : "solid #226500 3px",
        }}
      >
        <About darkness={props.darkness} />
        <Projects darkness={props.darkness} />
        <Contact darkness={props.darkness} />
      </div>

      <div className="bottom-padding"></div>
    </>
  );
}

export default Body;
