
import { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import { pokeListAPI } from './components/PokeAPI';
import Home from './components/Home';
import PokeCardList from './components/PokeCardList';

function App() {

  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pokeListArr = [];
    
    pokeListAPI.get(pokeListArr, setIsLoading);
    setPokeList(pokeListArr);
    
      
    
  }, [])

  return (
    <div>
            <Home />
      {isLoading ? (
          <p>Catching Them All!... Please Wait!</p>
        ) : (
            <PokeCardList pokeList={pokeList} />
        )
      }
    </div>
      
  );
}

export default App;
