import React from "react";
import ContactCard from "./ContactCard";
import stackoverflow from "../../../Images/stackoverflow.svg";
import github from "../../../Images/github.svg";
import linkedin from "../../../Images/linkedin.svg";

function Contact(props) {
  return (
    <div id="contact" className="contact-container">
      <h2
        style={{ color: props.darkness ? "	 #69ffbc" : "	 #226500" }}
        className="section-title"
      >
        Contact
      </h2>
      <div className="contacts">
        <ContactCard
          img={stackoverflow}
          darkness={props.darkness}
          text="Stackoverflow"
          link="https://stackoverflow.com/users/27972661/tasneemmanga"
        />
        <ContactCard
          img={github}
          darkness={props.darkness}
          text="GitHub"
          link="https://github.com/TasneemHannahManga"
        />
        <ContactCard
          img={linkedin}
          darkness={props.darkness}
          text="LinkedIn"
          link="https://www.linkedin.com/in/tasneem-manga-721064331/"
        />
      </div>
    </div>
  );
}

export default Contact;
