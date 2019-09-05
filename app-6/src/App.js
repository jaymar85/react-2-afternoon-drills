import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My To-diddly-do list:</h1>
        <input 
          value={this.state.input}
          onChange={e => this.handleInputChange(e.target.value)} 
          type="text" placeholder="Add a task" >
        </input>
        <button onClick={this.handleAddTask}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;

