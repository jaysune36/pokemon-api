import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';

function EvoChart({id}) {

  const [evoChart, setEvoChart] = useState({});
  const [evoChartLoading, setEvoCharLoading] = useState(false);
  const evolChainMark = +id + 2;

  // const evoChartImg = [];

  // useEffect(() => {
  //   pokeAPIIndividual.get(`evolution-chain/${+id +1}/`, setEvoCharLoading)
  //     .then(data => setEvoChart(data))
  // }, [])

// console.log(+id +1);

  return (
    <div className='d-block-flex flex-row justify-content-center a mt-2 mb-2'>
      <h6 className='text-center'>Evolution Chart</h6>
      {
        evoChartLoading ? (
          <p>loading...</p>
        ) : (
          <p>Loaded</p>
        )
      }
    </div>
  )
}

export default EvoChart