import "./components.css";

function Header(props) {
  return (
    <div className="text header">
      <div
        role="switch"
        aria-label={
          props.darkness
            ? "Click to toggle light mode"
            : "Click to toggle dark mode"
        }
        tabIndex="0"
        style={{ backgroundColor: props.darkness && "#333335" }}
        onClick={props.onToggle}
        className="toggle-button"
      >
        <div
          style={{
            marginLeft: props.darkness && "32px",
            backgroundColor: props.darkness && "#e4e4e4",
          }}
          className="slider"
        ></div>
      </div>
    </div>
  );
}

export default Header;
