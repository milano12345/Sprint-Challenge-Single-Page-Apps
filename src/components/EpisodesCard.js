import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
export default function EpisodesCard ({ ep }) {
  // image={image}
  return ( 
<Grid columns={1} divided>
      <Grid.Row>
        <Grid.Column>

<div>Name: {ep.name}</div>
<div>Air Date:{ep.air_date}</div>
<div>Episode: {ep.episode}</div>
        </Grid.Column>
        </Grid.Row>
        </Grid>

 
  )
}
