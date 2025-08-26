import React from 'react';
import PokeCardList from './PokeCardList';

function Home({pokeList}) {
  return (
    <div>
    <div>Home</div>
    <PokeCardList pokeList={pokeList}/>
    </div>
  )
}

export default Home