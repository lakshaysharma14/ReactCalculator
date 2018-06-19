import React, { Component } from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator.js";

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
