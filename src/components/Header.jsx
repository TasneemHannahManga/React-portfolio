import React from "react";

function Header(props) {
  return (
    <div className="text header">
      <div
        style={{ backgroundColor: props.darkness && "black" }}
        onClick={props.onToggle}
        className="toggle-button"
      >
        <div
          style={{
            marginLeft: props.darkness && "32px",
            backgroundColor: props.darkness && "white",
          }}
          className="slider"
        ></div>
      </div>
    </div>
  );
}

export default Header;
