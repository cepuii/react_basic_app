import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

const pages = ["Home", "TV shows", "About us"];

function App() {
  return (
    <div className="App">
      <Navigation pages={pages}></Navigation>
      
    </div>
  );
}

export default App;
