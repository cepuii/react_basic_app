import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

const pages = ["Home", "TV shows", "About us"];

function App() {
  return (
    <div className="App">
      <Navigation pages={pages}></Navigation>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
