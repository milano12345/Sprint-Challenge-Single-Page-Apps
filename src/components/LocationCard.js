import React from 'react'

export default function LocationCard ({ loc }) {
  // image={image}
  return (<div>
    <div>Name: {loc.name}</div>
    <div>Dimension: {loc.dimension}</div>
    <div>Type: {loc.type}</div>
    </div>
  )
}
