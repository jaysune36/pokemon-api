import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';


function MydModalWithGrid(props) {

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.Name} PokeDex Entry #{ +props.id + 1}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row >
            <Col xs={12} md={8} className='mainImgModal d-flex flex-direction-column'>
              <Image src={props.Sprite}/>
            </Col>
            <Col xs={6} md={4} className='sideImgModal'>
            <Image src={props.pokeListPokemon.sprites.back_default}/>
            <Image src={props.pokeListPokemon.sprites.front_shiny}/>
            <Image src={props.pokeListPokemon.sprites.back_shiny}/>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid