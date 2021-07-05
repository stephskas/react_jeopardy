import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      results: [],
      isAnswer: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((response) => this.setState({ results: response }))
  }
  handleClick(id) {
    this.setState(prevState => {
      const updatedResults = prevState.results.map(obj => {
        if (obj.id === id) {
          return {
            ...obj,
            isAnswer: !obj.isAnswer
          }
        } else {
          return {
            ...obj,
            isAnswer: obj.isAnswer,
          }
        }

        // return obj // place obj in updatedResults at same index
      })
            console.log(updatedResults)
            console.log(id)
    
      return { 
        results: updatedResults,
      } // return new version of state which is an object
    })
  }

  render() {
    const { results, isAnswer } = this.state
    return (
      <div className="App">
        <header className="header">
          <h1>JEOPARDY</h1>
        </header>
        <CardList results={results} isAnswer={isAnswer} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
