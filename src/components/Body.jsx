import About from "../pages/about/About.jsx";
import Projects from "../pages/projects/Projects.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Banner from "./Banner";

function Body(props) {
  return (
    <>
      <Banner darkness={props.darkness} />
      <div
        className="body-container"
        style={{
          backgroundColor: props.darkness ? "#333335" : "#e4e4e4",
          height: "100%",
          border: props.darkness ? "solid #69ffbc 3px" : "solid #226500 3px",
        }}
      >
        <About darkness={props.darkness} />
        <hr
          className="divider"
          style={{
            border: props.darkness ? "solid #e4e4e4 1px" : "solid #333335 3px",
          }}
        />
        <Projects darkness={props.darkness} />
        <hr
          className="divider"
          style={{
            border: props.darkness ? "solid #e4e4e4 1px" : "solid #333335 3px",
          }}
        />
        <Contact darkness={props.darkness} />
      </div>

      <div className="bottom-padding"></div>
    </>
  );
}

export default Body;
