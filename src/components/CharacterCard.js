import React from 'react'

export default function CharacterCard ({char}) {
  return (<div>
    <div>Character Name: {char.name}</div>
    <div>Gender: {char.gender}</div>
    <div>Species: {char.species}</div>
    <div>Status: {char.status}</div>
    </div>)
}
