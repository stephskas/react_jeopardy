 import React from 'react';
 import './card.styles.css'

let answer = "ANSWER"
export const Card = (props) => (
  <div className="card">
    <p>{props.question}</p>
    <button onClick={() => props.handleClick(props.id)} className="cardBtn">
      {answer}
    </button>
    <p
      style={{
        display: props.isAnswer ? "block" : "none",
        color: "#d4d7d8",
        fontStyle: "italic",
      }}
    >
      {props.answer}
    </p>
  </div>
)
