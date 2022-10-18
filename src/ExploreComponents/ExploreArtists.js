import React from 'react'
import { Box,Grid,Card,Stack } from '@mui/material';


const ExploreArtists = ({explore}) => {

  const{items}=explore.artists

  return (
    <Box>
      <h1>Explore Artists</h1>
      <Grid container rowSpacing={10} columnSpacing={3} className='explore-album-grid'>
        {items.map((item)=>{
          return(
            <Grid item   xs={6} sm={4} className='grid-item'>
              <Card className='explore-albums'>
              <div>{item.data.visuals.avatarImage.sources[1].url}</div>
              <a href={item.data.uri}>uri</a>
              <h4>Name:{item.data.profile.name}</h4>
              </Card>
          </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )
}
export default ExploreArtists