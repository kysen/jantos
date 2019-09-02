import React from "react";
import "./App.css";

const App = () => {
  const [juiceColor, setJuiceColor] = React.useState("#00ffb3");
  const [juiceHover, setJuiceHover] = React.useState("#00ffb3");

  return (
    <div className="App" style={{ color: juiceColor }}>
      <header className="App-header">Hello!</header>
      <header className="App-header">We are here to help.</header>
      <button
        className="button"
        style={{ backgroundColor: juiceHover }}
        onClick={() => setJuiceColor(juiceColor === "red" ? "#00ffb3" : "red")}
        onMouseEnter={() => {
          setJuiceHover(juiceColor === "red" ? "#00ffb3" : "red");
        }}
        onMouseLeave={() => {
          setJuiceHover(juiceColor);
        }}
      >
        Press Me
      </button>
    </div>
  );
};

export default App;
