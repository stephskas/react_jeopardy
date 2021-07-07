import React from 'react';
import Card from "../card/card.component"
import './card-list.styles.css'

export const CardList = (props) => (
  <div className="card-list">
    {console.log(props)}
    {props.results.map((result) => (
      <Card key={result.id} joke={result.setup} answer={result.punchline} />
    ))}
  </div>
)


