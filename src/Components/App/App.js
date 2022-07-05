import React from "react";
import "./App.css";
import Heading from "../Heading/Heading";
import Highlight from "../Highlight/Highlight";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";

function App() {
  return (
    <div className="App-header">
      <Heading />
      <div className="component_wrapper">
        <Hero />
        <Highlight />
        <Card />
      </div>
    </div>
  );
}

export default App;
