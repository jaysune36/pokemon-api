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
              console.log(value[i].species.name);
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

  return (
    <div className='d-block-flex flex-row justify-content-center a mt-2 mb-2'>
      <h6 className='text-center'>Evolution Chart</h6>
      {/* {
        evoChartLoading ? (
          <p>loading...</p>
        ) : ( */}
        <p onClick={()=>traverseObject(evoChain.chain)}>{evoChain.chain.species.name}</p>
        {evoChainArr}
         {/* <p>{evoChain.chain.species.name}</p>
         <p>{evoChain.chain.evolves_to[0].species.name}</p>
         <p>{evoChain.chain.evolves_to[0].evolves_to[0].species.name}</p> */}
        {/* // ) */}
      {/* } */}
    </div>
  )
}

export default EvoChart