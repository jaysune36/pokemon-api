import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';

function EvoChart({evoChain}) {

  // const [evoChart, setEvoChart] = useState({});
  // const [evoChartLoading, setEvoCharLoading] = useState(false);

  let evoChainArr = []
  // console.log(evoChain.chain.evolves_to);

  function traverseObject(obj) {
    for(let key of Object.keys(obj)) {
      if(obj.hasOwnProperty(key)) {
        const value = obj[key];
        if(typeof value === 'object' && value !== null) {
          console.log(`Key: ${key}, Value (is an object)`)
          console.log(value)
          traverseObject(value)
        } else {
          console.log(`Key: ${key}, Value: ${value}`)
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

  traverseObject(evoChain.chain.evolves_to)

 

  return (
    <div className='d-block-flex flex-row justify-content-center a mt-2 mb-2'>
      <h6 className='text-center'>Evolution Chart</h6>
      {/* {
        evoChartLoading ? (
          <p>loading...</p>
        ) : ( */}
        <p>{evoChain.chain.species.name}</p>
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