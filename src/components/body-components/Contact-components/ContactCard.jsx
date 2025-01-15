import React from "react";

function ContactCard(props) {
  return (
    <div className="contact">
      <a href={props.link} className="contact-link">
        <img
          style={{
            boxShadow: props.darkness
              ? "10px 10px 0 #69ffbc"
              : "10px 10px 0 #226500",
            border: props.darkness ? "solid 2px #69ffbc" : "solid 2px #226500",
          }}
          src={props.img}
        />
      </a>
      <p style={{ color: props.darkness ? "white" : "black" }} className="text">
        {props.text}
      </p>
    </div>
  );
}

export default ContactCard;
