import { useState, useEffect } from "react";
import Header from "./components/Header";
import darkBackground from "./Images/Dark-backgroound.svg";
import lightBackground from "./Images/Light-background.svg";
import Body from "./components/Body";

function App() {
  const theme = localStorage.getItem("darkness");
  const [isDark, setDarkness] = useState(() => {
    return JSON.parse(theme) ?? true;
  });

  function setTheme(pref) {
    localStorage.setItem("darkness", pref);
  }

  function toggleTheme() {
    setDarkness(!isDark);
  }

  useEffect(() => {
    setTheme(JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div
      style={{
        backgroundImage: isDark
          ? `url(${darkBackground})`
          : `url(${lightBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100%",
        maxWidth: "100vw",
      }}
    >
      <Header onToggle={toggleTheme} darkness={isDark} />

      <Body darkness={isDark} />
    </div>
  );
}

export default App;
