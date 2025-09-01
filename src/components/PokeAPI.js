//variables created to be easily used within the Class function. The PokeAPI Class is used to create async functions for each method.

const POKELIST_API = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

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

class PokeListAPIIndividual {
  get = async(url, changeBooStateInd) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json();
      changeBooStateInd(false);
      return data
    } catch(e) {
      console.log('There was an error fetching individual data', e)
    }
    
  }
}

export const pokeListAPI = new PokeListAPI();
export const pokeAPIIndividual = new PokeListAPIIndividual();