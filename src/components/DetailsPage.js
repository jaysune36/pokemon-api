import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { pokeAPIIndividual } from './PokeAPI';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container } from 'react-bootstrap';
import { typeBackgroundColor, handleMouseOver, handleMouseLeave } from './MydModalWithGrid';
import EvoChart from './EvoChart';


function DetailsPage() {
  const [pokeTextInfo, setPokeTextInfo] = useState([]);
  const [hoverState, setHoverState] = useState(false)
  const [pokeTextLoading, setpokeTextLoading] = useState(true);
  const location = useLocation();
  const { name, pokeImgArr, pokeListPokemon, id, typeColorObj } = location.state;
  const mainDetailImg = useRef(pokeImgArr.mainImg);

  const pokeTypeDetails = [];

  useEffect(() => {
    pokeAPIIndividual.get(pokeListPokemon.species.url, setpokeTextLoading)
      .then(data => setPokeTextInfo(data))
      
  }, [])

  let evoLink = `https://pokeapi.co/api/v2/`

  const baseStatDisplay = [];

   for(let key of Object.keys(pokeListPokemon.stats)) {
    switch(pokeListPokemon.stats[key].stat.name) {
        case 'attack':
        case 'special-attack':
        baseStatDisplay.push(
          <ProgressBar key={key} variant='info' label={`${pokeListPokemon.stats[key].stat.name}: ${pokeListPokemon.stats[key].base_stat}`} now={pokeListPokemon.stats[key].base_stat} className='mb-1 text-capitalize'>
      </ProgressBar> 
      )
      break;   
      case 'defense':
        case 'special-defense':
        baseStatDisplay.push(
          <ProgressBar key={key} variant='warning' label={`${pokeListPokemon.stats[key].stat.name}: ${pokeListPokemon.stats[key].base_stat}`} now={pokeListPokemon.stats[key].base_stat} className='mb-1 text-capitalize'>
      </ProgressBar> )
      break; 
      case 'hp':
        baseStatDisplay.push(
          <ProgressBar key={key} variant='success' label={`${pokeListPokemon.stats[key].stat.name}: ${pokeListPokemon.stats[key].base_stat}`} now={pokeListPokemon.stats[key].base_stat} className='mb-1 text-capitalize'>
      </ProgressBar> )
      break; 
      case 'speed':
        baseStatDisplay.push(
          <ProgressBar key={key} variant='danger' label={`${pokeListPokemon.stats[key].stat.name}: ${pokeListPokemon.stats[key].base_stat}`} now={pokeListPokemon.stats[key].base_stat} className='mb-1 text-capitalize'>
      </ProgressBar> )
      break; 
      default:
        console.log('invalid value');
        break;
      }
   
  }

  typeBackgroundColor(pokeListPokemon.types, typeColorObj, pokeTypeDetails);

  console.log(`${evoLink}/evolution_chart/url`)

  return (
      <Container>
        <Row>
          <Col>
            <Image className='d-block w-50 mx-auto my-0 p-0' src={pokeImgArr.mainImg} ref={mainDetailImg}/>
            <div className='d-flex flex-row justify-content-center detailImgList'>
              <Image src={pokeImgArr.mainBackImg} onMouseEnter={()=>handleMouseOver(mainDetailImg, pokeImgArr.mainBackImg, pokeImgArr.mainImg, setHoverState, hoverState)}
                onMouseLeave={() => handleMouseLeave(setHoverState, mainDetailImg, pokeImgArr.mainImg)}/>
              <Image src={pokeImgArr.shinyImg} onMouseEnter={()=>handleMouseOver(mainDetailImg, pokeImgArr.shinyImg, pokeImgArr.mainImg, setHoverState, hoverState)}
              onMouseLeave={() => handleMouseLeave(setHoverState, mainDetailImg, pokeImgArr.mainImg)}/>
              <Image src={pokeImgArr.shinyBackImg} onMouseEnter={()=>handleMouseOver(mainDetailImg, pokeImgArr.shinyBackImg, pokeImgArr.mainImg, setHoverState, hoverState)}
                onMouseLeave={() => handleMouseLeave(setHoverState, mainDetailImg, pokeImgArr.mainImg)}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='text-capitalize text-center'>{name}</h3>
            <div className='d-flex flex-row justify-content-center gap-2'>
            {pokeTypeDetails}
            </div>
          </Col>
        </Row>
        <Row>
          <EvoChart url={pokeListPokemon.species.url}/>
        </Row>
        <Row> 
          <Col md={6}>
            <p>Base Stats:</p>
             {baseStatDisplay}
          </Col>

          <Col>
           <p>PokeDex Entry: {+id + 1}</p>
            {pokeTextLoading ? (<p>Still loading</p>) : (
              <p className='pt-2 pb-2'> {pokeTextInfo.flavor_text_entries[8].flavor_text} </p>)
            
            }
            </Col>
        </Row>
      </Container>
  )
}

export default DetailsPage;