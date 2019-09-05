import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Image from "./Image /Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://www.rover.com/blog/wp-content/uploads/2017/11/twenty20_b121f53e-e044-405a-b73c-8a50bf08681d-960x540.jpg"} />
      </div>
    );
  }
}

export default App;
