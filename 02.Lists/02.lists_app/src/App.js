import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {
  state = {
    txt: '',
    txtArray: ['a', 'b', 'c']
  }

  changeHandler = (event) => {
    let text = event.target.value;
    const newState = {...this.state};
    newState.txt = text;
    newState.txtArray = [...text]
    this.setState({txt: newState.txt, txtArray: newState.txtArray})
    }
  deleteLetterHandler = (letterIndex) => {
    // again, make a copy of the data and set the state with it, don/'t mutate directly
    const txtArray = [...this.state.txtArray]
    txtArray.splice(letterIndex, 1);
    this.setState({txtArray: txtArray})
  }

  render() {
    let items = null;
    items = (
      <div>
      {/*When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort*/}
      {/*I could technically assign ids to items while putting them in the array*/}
        {this.state.txtArray.map((item, index) => {
          return  <CharComponent 
                    click={() => this.deleteLetterHandler(index)}
                    key={index} 
                    letter={item}>
                  </CharComponent>
        })}
      </div>
      )
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.changeHandler(event)}/>
        <p>Input length: {this.state.txt.length}.</p>
        <ValidationComponent length={this.state.txt.length}></ValidationComponent>
        {items}
      </div>
    );
  }
}

export default App;
