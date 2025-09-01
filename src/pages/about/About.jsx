import LanguagesToolsComponent from "./LanguagesToolsComponent";
import Services from "./Services";
import "./about.css";
import languagesAndTools from "./about";

function About(props) {
  const themeText = { color: props.darkness ? "white" : "black" };

  return (
    <div id="about" className="about-container">
      <h3
        style={{ color: props.darkness ? "	 #69ffbc" : "	 #226500" }}
        className="about-title section-title"
      >
        About
      </h3>
      <div className="about-me">
        <h4 style={themeText} className="about-me-title subheading">
          About me
        </h4>
        <p style={themeText} className="text about-me-para">
          I'm a self-taught web developer based in South Africa, specializing in
          sleek, responsive front-end development with a toe in backend
          fundamentals. My mission is to craft modern, dynamic websites that not
          only stand out visually but also deliver seamlessly, intuitivly guide
          users. I thrive on creating interfaces that wow without overwhelming;
          using purposeful animations, clean layouts, and thoughtful design to
          guide users effortlessly. Accessibility is at the heart of my work,
          ensuring every site I build reaches and resonates with a wider
          audience. Whether it's a bold brand presence or a subtle, elegant
          flow, I design with clarity, impact, and inclusivity in mind.
        </p>
      </div>
      <h4 style={themeText} className="subheading languages-tools-title">
        Languages and Tools
      </h4>
      <div className="languages-tools-container">
        {languagesAndTools.map((languageAndTool) => (
          <LanguagesToolsComponent
            key={languageAndTool.id}
            lightImage={languageAndTool.lightIcon}
            darkImage={languageAndTool.darkIcon}
            darkness={props.darkness}
            description={languageAndTool.iconDescription}
            text={languageAndTool.iconText}
          />
        ))}
      </div>
      <h4 style={themeText} className="subheading services-title">
        Services
      </h4>
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
