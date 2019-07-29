import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodesCard from './EpisodesCard'

export default function EpisodesList() {
const [eps, setEps] = useState([])
      console.log(eps)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/episode')
          .then(res => {
                setEps(res.data.results)
            
            }) 
          .catch(err => console.log(err))
  }, [])

  return <section className='character-list grid-view'>
     {eps.map(ep => <EpisodesCard ep={ep}/>)} 
      
    </section>

}

