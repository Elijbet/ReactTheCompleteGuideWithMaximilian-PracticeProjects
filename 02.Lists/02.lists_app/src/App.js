import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    txt: ''
  }

  changeHandler = (event) => {
    let text = event.target.value;
    const newState = {...this.state};
    newState.txt = text;
    this.setState({txt: newState.txt})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.changeHandler(event)}/>
        <p>Input length: {this.state.txt.length}.</p>
      </div>
    );
  }
}

export default App;
