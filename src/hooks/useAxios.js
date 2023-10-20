import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {v1 as uuid} from 'uuid';

const useAxios = (url) => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (url=null) => {
    try {
      const response = await axios.get(url);
      const newData = {...response.data, id: uuid()};
      setState(data => [...data, newData]);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    // fetchData();
  }, [url]);

  return [state, fetchData];
}

export default useAxios;



// const addCard = async () => {
//   const response = await axios.get(
//   "https://deckofcardsapi.com/api/deck/new/draw/"    
//   );
//   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
// };




// const addPokemon = async name => {
//   const response = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${name}/`
//   );
//   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
// };