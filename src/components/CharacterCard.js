import React from 'react'

export default function CharacterCard ({props}) {
  return (<div>
    <div>Character Name: {props.name}</div>
    <div>Gender: {props.gender}</div>
    <div>Species: {props.species}</div>
    <div>Status: {props.status}</div>
    </div>)
}
