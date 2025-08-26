import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard'
import { PokeAPI } from './PokeAPI';

function PokeCardList({pokeList}) {

  let pokeListArr = [];

  for(let key of Object.keys(pokeList)) {
    pokeListArr.push(<PokeCard key={key} Name={pokeList[key].name} 
      Sprite={pokeList[key].sprites.front_default}
      />);
  }
 

  return (
    <div className='container'>
      {pokeListArr}
      </div>
  )
}

export default PokeCardList