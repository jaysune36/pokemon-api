import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';

function EvoChart({evoChain}) {

  const [evoChart, setEvoChart] = useState({});
  const [evoChartLoading, setEvoCharLoading] = useState(false);

  return (
    <div className='d-block-flex flex-row justify-content-center a mt-2 mb-2'>
      <h6 className='text-center'>Evolution Chart</h6>
      {
        evoChartLoading ? (
          <p>loading...</p>
        ) : (
         <p>{evoChain.chain.evolves_to[0].species.name}</p>
        // console.log(evoChain.chain.evolves_to[0].species.name)
        )
      }
    </div>
  )
}

export default EvoChart