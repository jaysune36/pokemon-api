import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import { pokeListAPI } from './PokeAPI';


function MydModalWithGrid(props) {

  const [isHovered, setIsHovered] = useState(false);
  const mainImgModalSrc = useRef(props.Sprite);
  
  const PokeImgList = {
    mainImg: props.Sprite,
    mainBackImg: props.pokeListPokemon.sprites.back_default,
    shinyImg: props.pokeListPokemon.sprites.front_shiny,
    shinyBackImg: props.pokeListPokemon.sprites.back_shiny
  }

  const handleMouseOver = (imgRef) => {
    setIsHovered(true);
    if(mainImgModalSrc.current) {
      mainImgModalSrc.current.src = imgRef;
      console.log(mainImgModalSrc.current);
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    mainImgModalSrc.current.src = PokeImgList.mainImg;
  }

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
              <Image src={props.Sprite} ref={mainImgModalSrc}/>
            </Col>
            <Col xs={6} md={4} className='sideImgModal'>
            <Image onMouseEnter={()=>handleMouseOver(PokeImgList.mainBackImg)} 
            onMouseLeave={handleMouseLeave}
            src={PokeImgList.mainBackImg}
            />
            <Image onMouseEnter={()=>handleMouseOver(PokeImgList.shinyImg)} 
            onMouseLeave={handleMouseLeave}
            src={PokeImgList.shinyImg}/>
            <Image onMouseEnter={()=>handleMouseOver(PokeImgList.shinyBackImg)} 
            onMouseLeave={handleMouseLeave} src={PokeImgList.shinyBackImg}/>
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