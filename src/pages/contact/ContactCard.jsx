import "./contact.css";

function ContactCard(props) {
  return (
    <div className="contact">
      <a aria-label={props.arialink} href={props.link} className="contact-link">
        <img
          loading="lazy"
          style={{
            boxShadow: props.darkness
              ? "10px 10px 0 #69ffbc"
              : "10px 10px 0 #226500",
            border: props.darkness ? "solid 2px #69ffbc" : "solid 2px #226500",
          }}
          src={
            props.darkness
              ? "./socials/" + props.darkImg
              : "./socials/" + props.lightImg
          }
          alt={props.description}
        />
      </a>
      <p style={{ color: props.darkness ? "white" : "black" }} className="text">
        {props.text}
      </p>
    </div>
  );
}

export default ContactCard;
