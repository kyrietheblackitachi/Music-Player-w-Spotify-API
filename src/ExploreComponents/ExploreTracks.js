import React from 'react'
import { Box,Grid,Card,Stack } from '@mui/material';


const ExploreTracks = ({explore}) => {

  const{items}=explore.tracks
  return (
    <Box>
      <h1>Explore Tracks</h1>
      <Grid container rowSpacing={10} columnSpacing={3} className='explore-album-grid'>
        {items.map((item)=>{
          return(
            <Grid item   xs={6} sm={4} className='grid-item'>
              <Card className='explore-albums'>
              <img src={item.data.albumOfTrack.coverArt.sources[2].url}/>
              <a href={item.data.uri}>uri</a>
              <h4>Name:{item.data.name}</h4>
              <h4>{item.data.albumOfTrack.name}</h4>
              <h4>{item.data.artists.items[0].profile.name}</h4>
              <h4>Duration:{item.data.duration.totalMilliseconds/1000}</h4>
              </Card>
          </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )
}
export default ExploreTracks