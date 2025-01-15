import React from "react";
import ContactCard from "./ContactCard";

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
          img="/images/stackoverflow.svg"
          darkness={props.darkness}
          text="Stackoverflow"
          link="https://stackoverflow.com/users/27972661/tasneemmanga"
        />
        <ContactCard
          img="/images/github.svg"
          darkness={props.darkness}
          text="GitHub"
          link="https://github.com/TasneemHannahManga"
        />
        <ContactCard
          img="/images/linkedin.svg"
          darkness={props.darkness}
          text="LinkedIn"
          link="https://www.linkedin.com/in/tasneem-manga-721064331/"
        />
      </div>
    </div>
  );
}

export default Contact;
