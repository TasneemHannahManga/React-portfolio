import React from "react";
import LanguagesToolsComponent from "./LanguagesToolsComponent";
import Services from "./Services";
import  css from "../../../Images/css3-02-svgrepo-com.svg"
import bootstrap from "../../../Images/bootstrap-fill-svgrepo-com.svg";
import html from "../../../Images/html5-01-svgrepo-com.svg"
import javascript from "../../../Images/js01-svgrepo-com.svg";
import react from "../../../Images/react-svgrepo-com.svg";

function About(props) {
  const themeText = { color: props.darkness ? "white" : "black" };
  return (
    <div id="about" className="about-container">
      <h2
        style={{ color: props.darkness ? "	 #69ffbc" : "	 #226500" }}
        className="about-title section-title"
      >
        About
      </h2>
      <div className="about-me">
        <h3 style={themeText} className="about-me-title subheading">
          About me
        </h3>
        <p style={themeText} className="text about-me-para">
          Hey! I'm a self-taught web developer from South Africa.
        </p>
      </div>
      <h3 style={themeText} className="subheading languages-tools-title">
        Languages and Tools
      </h3>
      <div className="languages-tools-container">
        <LanguagesToolsComponent
          image={html}
          darkness={props.darkness}
          text="HTML"
        />
        <LanguagesToolsComponent
          image={css}
          darkness={props.darkness}
          text="CSS"
        />
        <LanguagesToolsComponent
          image={javascript}
          darkness={props.darkness}
          text="JavaScript"
        />
        <LanguagesToolsComponent
          image={react}
          darkness={props.darkness}
          text="React"
        />
        <LanguagesToolsComponent
          image={bootstrap}
          darkness={props.darkness}
          text="Bootstrap"
        />
      </div>
      <h3 style={themeText} className="subheading services-title">
        Services
      </h3>
      <div className="services-container">
        <Services darkness={props.darkness} title="UI/UX Design." />
        <Services darkness={props.darkness} title="API Integration" />
        <Services darkness={props.darkness} title="Responsive Web Design" />
        <Services darkness={props.darkness} title="Social Media Icons" />
        <Services
          darkness={props.darkness}
          title="Cross Browser Compatibility"
        />
      </div>
    </div>
  );
}

export default About;
