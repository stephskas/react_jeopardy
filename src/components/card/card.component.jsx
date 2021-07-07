import React, { Component } from 'react';
import './card.styles.css'

class Card extends Component {
  constructor(props){
    super()
    this.state ={
      props: props,
      isAnswer: false    // doesn't seem to be necessary to set here
    }
  }

  render(){
    return(
      <div className="card">
        <p>{this.state.props.joke}</p>
        <button onClick={() => this.setState({isAnswer: !this.state.isAnswer})} className="cardBtn">
          {"ANSWER"}
        </button>
        <p
          style={{
            display: this.state.isAnswer ? "block" : "none",
            color: "#d4d7d8",
            fontStyle: "italic",
          }}
        >
          {this.state.props.answer}
        </p>
      </div>
    )
  }
}
export default Card

