import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { pokeAPIIndividual } from './PokeAPI';

function EvoChart({url}) {

  const [evoChart, setEvoChart] = useState({});
  const [evoChartLoading, setEvoCharLoading] = useState(false);


  const evoChartImg = [];

  useEffect(() => {
    pokeAPIIndividual.get(url, setEvoCharLoading)
      .then(data => setEvoChart(data))
  }, [])

  console.log(url)

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