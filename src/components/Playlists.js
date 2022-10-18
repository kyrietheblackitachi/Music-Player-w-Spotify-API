import React from 'react'
import { Container,Box} from '@mui/system'
import {Card, Grid } from '@mui/material'
const Playlists = ({explore}) => {
  const{items}=explore.playlists
  return (
    <Box>
      <h1>Explore Playlists</h1>
      <Grid container rowSpacing={10} columnSpacing={3} className='explore-album-grid'>
        {items.map((item)=>{
          return(
            <Grid item   xs={6} sm={4} className='grid-item'>
              <Card className='explore-albums'>
              <img src={item.data.images.items[0].sources[0].url}/>
              <a href={item.data.uri}>uri</a>
              <h4>Description:{item.data.description}</h4>
              </Card>
          </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )
}

export default Playlists