import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';


function MydModalWithGrid(props) {

  const [isHovered, setIsHovered] = useState(false);
  const [pokeTextInfo, setPokeTextInfo] = useState([]);
  const [pokeTextLoading, setpokeTextLoading] = useState(true);
  const mainImgModalSrc = useRef(props.Sprite);

  const baseStatDisplay = [];

    useEffect(() => {
    pokeAPIIndividual.get(props.url, setpokeTextLoading)
      .then(data => setPokeTextInfo(data))
      
  }, [])
  
  
  const PokeImgList = {
    mainImg: props.sprite,
    mainBackImg: props.pokeListPokemon.sprites.back_default,
    shinyImg: props.pokeListPokemon.sprites.front_shiny,
    shinyBackImg: props.pokeListPokemon.sprites.back_shiny
  }

  const handleMouseOver = (imgRef) => {
    setIsHovered(true);
    if(mainImgModalSrc.current.src === PokeImgList.mainImg || isHovered) {
      mainImgModalSrc.current.src = imgRef;
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    mainImgModalSrc.current.src = PokeImgList.mainImg;
  }

  for(let key of Object.keys(props.pokeListPokemon.stats)) {
    baseStatDisplay.push(
      <p>{props.pokeListPokemon.stats[key].stat.name}: {props.pokeListPokemon.stats[key].base_stat}</p>
    )
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header className='d-flex flex-direction-row' closeButton>
        <Modal.Title className='d-flex flex-direction-column-reverse ' id="contained-modal-title-vcenter">
          <p className='text-capitalize'>{props.name} </p> 
          <p className='fs-6'> PokeDex Entry #{ +props.id + 1}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row >
            <Col xs={12} md={8} className='mainImgModal d-flex flex-direction-column'>
              <Image src={PokeImgList.mainImg} ref={mainImgModalSrc}/>
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
          <Row className='border-top border-bottom'>
            <Col>
            {pokeTextLoading ? (<p>Still loading</p>) : (<p className='pt-2 pb-2'> {pokeTextInfo.flavor_text_entries[8].flavor_text} </p>)
            
            }
            </Col>
          </Row>
          <Row>

            <Col xs={6} md={4}>
              <p>Base Stats:</p>
              {baseStatDisplay}
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