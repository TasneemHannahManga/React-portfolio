import React, { useState } from "react";

function Banner(props) {
  const [isMousedOver, setMouseOver] = useState(false);
  const [isMousedEnter, setMouseEnter] = useState(false);

  function toggleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  function togggleMouseEnter() {
    setMouseEnter(!isMousedEnter);
  }

  return (
    <div className="banner-container">
      <div className="banner-title">
        <h1
          style={{
            color: props.darkness && "#69ffbc",
            backgroundColor: props.darkness && "rgba(0, 0, 0, 0.4)",
          }}
        >
          Welcome, my name is Tasneem Manga.
        </h1>
        <br className="banner-title-br" />
        <h2
          style={{
            color: props.darkness && "#69ffbc",
            backgroundColor: props.darkness && "rgba(0, 0, 0, 0.4)",
          }}
        >
          I am a full-stack <span>website developer</span>.
        </h2>

        <div className="text banner-buttons">
          <a href="#projects">
            <button
              style={{
                boxShadow: isMousedOver
                  ? props.darkness
                    ? "5px 5px 0 #69ffbc"
                    : "5px 5px 0 #226500"
                  : null,
                border: props.darkness && "solid white 1px",
                backgroundColor: props.darkness && "black",
                color: props.darkness && "#69ffbc",
              }}
              onMouseOver={toggleMouseOver}
              onMouseOut={toggleMouseOver}
              type="button"
            >
              Projects
            </button>
          </a>
          <a href="#contact">
            <button
              style={{
                boxShadow: isMousedEnter
                  ? props.darkness
                    ? "5px 5px 0 #69ffbc"
                    : "5px 5px 0 #226500"
                  : null,
                border: props.darkness && "solid white 1px",
                backgroundColor: props.darkness && "black",
                color: props.darkness && "#69ffbc",
              }}
              onMouseEnter={togggleMouseEnter}
              onMouseLeave={togggleMouseEnter}
              type="button"
            >
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
