import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard'

function PokeCardList() {

  const [pokeList, setPokeList] = useState([]);

  let pokeListArr = [];

  useEffect(() => {
      const getData = async() => {
        const fetchAllData = [];
        try {
        const resp1 = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);
        const data1 = await resp1.json();

        for(let key of Object.keys(data1.results)) {
          const resp2 = await fetch(data1.results[key].url);
          const data2 = await resp2.json();
          fetchAllData.push(data2)
          
        }


      } catch(e) {
        console.log('Error fetching data', e);
      }
        setPokeList(fetchAllData)
      }

      getData();
    
  }, [])

if(pokeList) {
  for(let key of Object.keys(pokeList)) {
    pokeListArr.push(<PokeCard key={key} Name={pokeList[key].name} 
      Sprite={pokeList[key].sprites.front_default}
      />);
  }
}
 

  return (
    <div className='container'>
      {pokeListArr}
      </div>
  )
}

export default PokeCardList