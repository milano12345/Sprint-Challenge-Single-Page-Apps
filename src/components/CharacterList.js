import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard';
export default function CharacterList() {
  const [chars, setChars] = useState([])
      console.log(chars)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character')
          .then(res => {
              setChars(res.data.results)
             console.log(chars)
            }) 
          .catch(err => console.log(err))
  }, [])

  return <section className='character-list grid-view'>
        {chars.map(char => <CharacterCard char={char}/>)}
      
    </section>

}
