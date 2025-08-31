import PokeCard from './PokeCard';

function PokeCardList({pokeList}) {

  let pokeListArr = [];

    for(let key of Object.keys(pokeList)) {
    pokeListArr.push(<PokeCard 
      key={key} 
      id={key}
      pokeListPokemon={pokeList[key]} 
      name={pokeList[key].name} 
      sprite={pokeList[key].sprites.front_default}
      url ={pokeList[key].species.url}
      />);
  }

  return (
    <div className='d-flex justify-content-center flex-wrap'>
      {pokeListArr}
      </div>
  )
}

export default PokeCardList