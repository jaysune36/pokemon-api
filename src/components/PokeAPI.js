//variables created to be easily used within the Class function. The PokeAPI Class is used to create async functions for each method.

const POKELIST_API = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

//Empty variable created to hold individual url for each API that is returned for the POKELIST_API

const POKELISTIND_API = '';

class PokeListAPI {
  get = async(arr, changeBooState) => {
    try {
      changeBooState(true)
      const resp1 = await fetch(POKELIST_API);
      const data1 = await resp1.json();

      for(let key of Object.keys(data1.results)) {
        const resp2 = await fetch(data1.results[key].url);
        const data2 = await resp2.json()
        arr.push(data2);
      }
      changeBooState(false);

    } catch(e) {
      console.log('There was an error trying to fetch data', e);
    }
  }
}

export const pokeListAPI = new PokeListAPI();