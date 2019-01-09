import React, { Component } from "react";
import "./App.css";

import Moves from "./components/Moves";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Moves />
      </div>
    );
  }
}

export default App;
