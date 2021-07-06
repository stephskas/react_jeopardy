import React, { Component } from 'react';
import './card.styles.css'

let answer = "ANSWER"

class Card extends Component {
  constructor(props){
    super()
    this.state ={
      props: props    
    }
  }

  render(){
    return(
      <div className="card">
        <p>{this.state.props.question}</p>
        <button onClick={() => this.setState({isAnswer: !this.state.isAnswer})} className="cardBtn">
          {answer}
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


// export const Card = (props) => (
//   <div className="card">
//     <p>{props.question}</p>
//     <button onClick={() => props.handleClick(props.id)} className="cardBtn">
//       {answer}
//     </button>
//     <p
//       style={{
//         display: props.isAnswer ? "block" : "none",
//         color: "#d4d7d8",
//         fontStyle: "italic",
//       }}
//     >
//       {props.answer}
//     </p>
//   </div>
// )
