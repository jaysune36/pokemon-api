import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import { type } from '@testing-library/user-event/dist/type';
// import { pokeAPIIndividual } from './PokeAPI';


function MydModalWithGrid(props) {

  const [isHovered, setIsHovered] = useState(false);
  // const [pokeTextInfo, setPokeTextInfo] = useState([]);
  // const [pokeTextLoading, setpokeTextLoading] = useState(true);
  const mainImgModalSrc = useRef(props.Sprite);


  const navigate = useNavigate();

  //   useEffect(() => {
  //   pokeAPIIndividual.get(props.url, setpokeTextLoading)
  //     .then(data => setPokeTextInfo(data))
      
  // }, [])

  const pokeType = [];
  
  const typeColorObj = [
    {name:'fire',
      color: '#D20B0B'},
    {name:'water',
      color: '#0c4feb'},
    {name: 'grass',
      color: '#0aa119'},
    {name: 'poison',
      color: '#800eeb'},
    {name: 'ground',
      color: '#a65f08'},
    {name: 'rock',
      color: '#633905'},
    {name: 'fighting',
      color: '#d49344'},
    {name: 'psychic',
      color: '#9b23ad'},
    {name: 'ghost',
      color: '#501570'},
    {name: 'fairy',
      color: '#f576d7'},
    {name: 'dragon',
      color: '#94a108'},
    {name: 'bug',
      color: '#7cab54'},
    {name: 'normal',
      color: '#e4ebdf'},
    {name: 'electric',
      color: '#eaf51d'}
  ]
  
  
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

  const navigateAndTransferPokeInfo = () => {
    navigate('/poke-details', {state: 
      {
        // pokeTextInfo: pokeTextInfo, 
      name: props.name,
      pokeImgArr: PokeImgList,
      pokeListPokemon: props.pokeListPokemon,
      id: props.id,
      typeColorObj: typeColorObj
    } });
  }

  for(let key of Object.keys(props.pokeListPokemon.types)) {
    for(let i=0; i<typeColorObj.length; i++) {
      if(typeColorObj[i].name === props.pokeListPokemon.types[key].type.name) {
        pokeType.push(<p 
          className='text-capitalize text-center fs-4 border border-dark rounded w-25' 
          style={{backgroundColor: typeColorObj[i].color}}
          >{props.pokeListPokemon.types[key].type.name}</p>)
      }
    }
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header className='d-flex flex-direction-row' closeButton>
        <Modal.Title className='d-flex flex-direction-column-reverse ' id="contained-modal-title-vcenter">
          <p className='text-capitalize'>{props.name} </p> 
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
          <Row>
            {/* <Col>
            {pokeTextLoading ? (<p>Still loading</p>) : (<p className='pt-2 pb-2'> {pokeTextInfo.flavor_text_entries[8].flavor_text} </p>)
            
            }
            </Col> */}
            <Col className='d-flex flex-col gap-1'>
              {pokeType}
            </Col>
          </Row>
        
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-info' className='pe-2' onClick={navigateAndTransferPokeInfo}>Click to Learn More...</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid