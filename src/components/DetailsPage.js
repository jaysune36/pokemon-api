import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { pokeAPIIndividual } from './PokeAPI';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import { Col, Container } from 'react-bootstrap';


function DetailsPage() {
  const [pokeTextInfo, setPokeTextInfo] = useState([]);
  const [pokeTextLoading, setpokeTextLoading] = useState(true);
const location = useLocation();
  const { name, 
    // pokeTextInfo, 
    pokeImgArr, pokeListPokemon, id, typeColorObj } = location.state;

    const pokeTypeDetails = []

  useEffect(() => {
    pokeAPIIndividual.get(pokeListPokemon.species.url, setpokeTextLoading)
      .then(data => setPokeTextInfo(data))
      
  }, [])

  

  const baseStatDisplay = [];

   for(let key of Object.keys(pokeListPokemon.stats)) {
    baseStatDisplay.push(
      <p key={key}>{pokeListPokemon.stats[key].stat.name}: {pokeListPokemon.stats[key].base_stat}</p>
    )
  }


    for(let key of Object.keys(pokeListPokemon.types)) {
      for(let i=0; i<typeColorObj.length; i++) {
        if(typeColorObj[i].name === pokeListPokemon.types[key].type.name) {
          pokeTypeDetails.push(<p 
            className='text-capitalize text-center fs-4 border border-dark rounded w-25' 
            style={{backgroundColor: typeColorObj[i].color}}
            >{pokeListPokemon.types[key].type.name}</p>)
        }
      }
    }

  return (
      <Container>
        <Row>
          <Col>
            <Image className='d-block w-50 mx-auto my-0 p-0' src={pokeImgArr.mainImg}/>
            <div className='d-flex flex-row justify-content-center'>
              <Image src={pokeImgArr.mainBackImg}/>
              <Image src={pokeImgArr.shinyImg}/>
              <Image src={pokeImgArr.shinyBackImg}/>
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

          {/* <Col md={6} >
            <p>PokeDex Entry: {+id + 1}</p>
            <p>{pokeTextInfo.flavor_text_entries[8].flavor_text}</p>
          </Col> */}
        </Row>
      </Container>
  )
}

export default DetailsPage;