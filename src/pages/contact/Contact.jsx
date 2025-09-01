import ContactCard from "./ContactCard";
import "./contact.css";
import socials from "./contact";

function Contact(props) {
  return (
    <div id="contact" className="contact-container">
      <h3
        style={{ color: props.darkness ? "	 #69ffbc" : "	 #226500" }}
        className="section-title"
      >
        Contact
      </h3>
      <div className="contacts">
        {socials.map((social) => (
          <ContactCard
            key={social.id}
            lightImg={social.lightIcon}
            darkImg={social.darkIcon}
            darkness={props.darkness}
            text={social.iconText}
            description={social.iconDescription}
            link={social.iconLink}
            arialink={social.ariaIconLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
