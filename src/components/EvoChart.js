import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';

function EvoChart({evoChain}) {

  let evoChainArr = [];

  function traverseObject(obj) {
    for(let key of Object.keys(obj)) {
      if(obj.hasOwnProperty(key)) {
        const value = obj[key];
        if(typeof value === 'object' && value !== null) {
          if(key === 'evolves_to' && value[0] !== undefined) {
            for(let i=0; i<value.length; i++) {
              console.log(value[i].evolution_details);
              evoChainArr.push(<p>Evolves To: {value[i].species.name}</p>)
              if(value[i].evolution_details[0].min_level) {
                evoChainArr.push(<p>@{value[i].evolution_details[0].min_level}</p>)
              } else if (value[i].evolution_details[0].trigger) {
                evoChainArr.push(<p>@{value[i].evolution_details[0].trigger.name}</p>)
              }
    
            }
            
            // console.log(value);
          } 
          traverseObject(value)
        } 
        
      }
    }
  }

  const myObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 'hello'
    }
  },
  g: [4, 5, { h: 6 }]
};

traverseObject(evoChain.chain)

  return (
    <div className='d-block-flex flex-row justify-content-center a mt-2 mb-2'>
      <h6 className='text-center'>Evolution Chart</h6>
     <p onClick={()=>traverseObject(evoChain.chain)}>{evoChain.chain.species.name}</p>
        {evoChainArr}
     
    </div>
  )
}

export default EvoChart