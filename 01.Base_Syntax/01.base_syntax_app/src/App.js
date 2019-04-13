import React, { Component } from 'react';
import UserOutput from './UserOutput'
import UserInput from './UserInput'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Liza', profession: 'cooking Arichoke Za\'atar Lemon Chicken whenever not learning React'},
      {name: 'Alex', profession: 'mastering poached eggs on toasted garlic bread with smashed avocadoes'},
      {name: 'Anne', profession: 'developing a perfect recipe for peach mango mint smoothie with mixed seeds'}
    ],
    vampires: 'Some other form of persons.'
  }
  //Learn how to import Input component to Output component, so no need to rewrite it 3 times. 
  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: event.target.value, profession: 'cooking Arichoke Za\'atar Lemon Chicken whenever not learning React'},
        {name: 'Alex', profession: 'mastering poached eggs on toasted garlic bread with smashed avocadoes'},
        {name: 'Anne', profession: 'developing a perfect recipe for peach mango mint smoothie with mixed seeds'}
      ]
    })
  }
  nameChangedHandlerOne = (event) => {
    this.setState ({
      persons: [
        {name: 'Liza', profession: 'cooking Arichoke Za\'atar Lemon Chicken whenever not learning React'},
        {name: event.target.value, profession: 'mastering poached eggs on toasted garlic bread with smashed avocadoes'},
        {name: 'Anne', profession: 'developing a perfect recipe for peach mango mint smoothie with mixed seeds'}
      ]
    })
  }
  nameChangedHandlerTwo = (event) => {
    this.setState ({
      persons: [
        {name: 'Liza', profession: 'cooking Arichoke Za\'atar Lemon Chicken whenever not learning React'},
        {name: 'Alex', profession: 'mastering poached eggs on toasted garlic bread with smashed avocadoes'},
        {name: event.target.value, profession: 'developing a perfect recipe for peach mango mint smoothie with mixed seeds'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <UserOutput 
          name={this.state.persons[0].name} 
          profession={this.state.persons[0].profession}/>
        <UserInput
          changed={this.nameChangedHandler}/>
        <UserOutput
          name={this.state.persons[1].name} 
          profession={this.state.persons[1].profession}/>
        <UserInput
          changed={this.nameChangedHandlerOne}/>
        <UserOutput
          name={this.state.persons[2].name} 
          profession={this.state.persons[2].profession}/>
        <UserInput
          changed={this.nameChangedHandlerTwo}/>
      </div>
    );
  }
}

export default App;
