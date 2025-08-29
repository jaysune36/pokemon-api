
import Button from 'react-bootstrap/Button';
import PokeCard from './PokeCard';
import MydModalWithGrid from './MydModalWithGrid';

function PokeCardList({pokeList}) {

  let pokeListArr = [];

    for(let key of Object.keys(pokeList)) {
    pokeListArr.push(<PokeCard key={key} Name={pokeList[key].name} 
      Sprite={pokeList[key].sprites.front_default}
      />);
  }

  return (
    <div className='d-flex justify-content-center flex-wrap'>
      {pokeListArr}
      </div>
  )
}

export default PokeCardList