import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [chars, setChars] = useState('')

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character')
          .then(res => setChars(res.data.results)) 

      
  }, [])

  return <section className='character-list grid-view'>
        <div>{console.log(chars)}</div>
      
    </section>

}
