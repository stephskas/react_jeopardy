import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      results: [],
    }
  }
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((response) => this.setState({ results: response }))
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>JEOPARDY</h1>
        </header>
        <CardList results={this.state.results} />
      </div>
    )
  }
}

export default App;
