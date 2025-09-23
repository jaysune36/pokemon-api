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
              // console.log(value[i].evolution_details);

              if(value[i].evolution_details[0].item !== null) {
                evoChainArr.push(<p>Stone: {value[i].evolution_details[0].item.name}</p>);
              evoChainArr.push(<p className='text-capitalize'>Evolves To: {value[i].species.name}</p>);
              } else if(value[i].evolution_details[0].min_level) {
                evoChainArr.push(<p className='evo-text'>- <p>Level Up</p>{value[i].evolution_details[0].min_level} &#8594;</p>);
              evoChainArr.push(<p className='text-capitalize'>Evolves To: {value[i].species.name}</p>);
              } else if (value[i].evolution_details[0].trigger) {
                evoChainArr.push(<p>From: {value[i].evolution_details[0].trigger.name}</p>);
              evoChainArr.push(<p className='text-capitalize'>Evolves To: {value[i].species.name}</p>);
              } else {
                evoChainArr.push(<p>This Pokemon does not Evolve</p>)
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
        <div className='d-flex justify-content-between flex-wrap'>
     <p className='text-capitalize' onClick={()=>traverseObject(evoChain.chain)}>{evoChain.chain.species.name}</p>
          {evoChainArr}
        </div>
     
    </div>
  )
}

export default EvoChart