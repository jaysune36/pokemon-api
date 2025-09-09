import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';


function MydModalWithGrid(props) {

  const [isHovered, setIsHovered] = useState(false);
  const mainImgModalSrc = useRef(props.Sprite);


  const navigate = useNavigate();

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

  const navigateAndTransferPokeInfo = () => {
    navigate('/poke-details', {state: 
      {
      name: props.name,
      pokeImgArr: PokeImgList,
      pokeListPokemon: props.pokeListPokemon,
      id: props.id,
      typeColorObj: typeColorObj
    } });
  }

typeBackgroundColor(props.pokeListPokemon.types, typeColorObj, pokeType);
  

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
            <Image onMouseEnter={()=>handleMouseOver(mainImgModalSrc, PokeImgList.mainBackImg, PokeImgList.mainImg, setIsHovered, isHovered)} 
            onMouseLeave={() => handleMouseLeave(setIsHovered, mainImgModalSrc, PokeImgList.mainImg)}
            src={PokeImgList.mainBackImg}
            />
            <Image onMouseEnter={()=>handleMouseOver(mainImgModalSrc, PokeImgList.shinyImg, PokeImgList.mainImg, setIsHovered, isHovered)} 
            onMouseLeave={() => handleMouseLeave(setIsHovered, mainImgModalSrc, PokeImgList.mainImg)}
            src={PokeImgList.shinyImg}/>
            <Image onMouseEnter={()=>handleMouseOver(mainImgModalSrc, PokeImgList.shinyBackImg, PokeImgList.mainImg, setIsHovered, isHovered)} 
            onMouseLeave={() => handleMouseLeave(setIsHovered, mainImgModalSrc, PokeImgList.mainImg)} src={PokeImgList.shinyBackImg}/>
            </Col>
          </Row>
          <Row>
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

export default MydModalWithGrid;

export const typeBackgroundColor = (arr1, arr2, arr3) => {
  for(let key of Object.keys(arr1)) {
    for(let i=0; i<arr2.length; i++) {
      if(arr2[i].name === arr1[key].type.name) {
        arr3.push(<p 
          className='text-capitalize text-center fs-4 border border-dark rounded w-25' 
          style={{backgroundColor: arr2[i].color}}
          >{arr1[key].type.name}</p>)
      };
    };
  };
};

export const handleMouseOver = (imgRef, imgRefSrc, imgArr, hoverState, hoverBoolean) => {
    hoverState(true);
    if(imgRef.current.src === imgArr || hoverBoolean) {
      imgRef.current.src = imgRefSrc;
    }
  }

export const handleMouseLeave = (hoverState, imgRef, imgRefSrcSet) => {
    hoverState(false);
    imgRef.current.src = imgRefSrcSet;
  }