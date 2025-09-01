import React, {useState} from "react"; 
import { Card } from "react-bootstrap";
import MydModalWithGrid from "./MydModalWithGrid";

function PokeCard (props) {

    const [modalShow, setModalShow] = useState(false);

  return (
    <div className="d-inline-flex p-2 flex-row justify-content-center flex-wrap">
      <Card className="pokeCard" id={props.id} onClick={()=> setModalShow(true)}>
        <Card.Img variant="top" className="pokeCardImg" src={props.sprite}/>
        <Card.Body className="border-top pokeCardBdy">
          <Card.Title className="text-capitalize">{props.name}</Card.Title>
        </Card.Body>
      </Card>

      <MydModalWithGrid show={modalShow} url={props.url} pokeListPokemon={props.pokeList} {...props} onHide={() => setModalShow(false)}>
        <h2>hello world</h2>
        </MydModalWithGrid>

    </div>
  )
}

export default PokeCard;