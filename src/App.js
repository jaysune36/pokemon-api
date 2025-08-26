
import { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import { pokeListAPI } from './components/PokeAPI';
import Home from './components/Home';

function App() {

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const pokeListArr = [];
    pokeListAPI.get(pokeListArr);
    setPokeList(pokeListArr)
  }, [])

  return (
    <Home pokeList={pokeList}/>
  );
}

export default App;
