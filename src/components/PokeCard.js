import React from "react"; 
import { Card } from "react-bootstrap";

function PokeCard (props) {

  return (
    <div className="d-inline-flex p-2 flex-row justify-content-center flex-wrap">
      <Card className="pokeCard">
        <Card.Img variant="top" src={props.Sprite}/>
        <Card.Body className="border-top">
          <Card.Title>{props.Name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PokeCard;