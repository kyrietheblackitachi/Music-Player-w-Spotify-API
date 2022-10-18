import React from 'react'
import { Box,Grid,Card,Stack } from '@mui/material';


const ExploreEpisodes = ({explore}) => {

  const{items}=explore.episodes
  return (
    <Box>
      <h1>Explore Episodes</h1>
      <Grid container rowSpacing={10} columnSpacing={3} className='explore-album-grid'>
        {items.map((item)=>{
          return(
            <Grid item   xs={6} sm={4} className='grid-item'>
              <Card className='explore-albums'>
              <img src={item.data.coverArt.sources[2].url}/>
              <h4>Name:{item.data.name}</h4>
              <h4>Duration:{item.data.duration.totalMilliseconds}</h4>
              <h4>Release Date:{item.data.releaseDate.isoString}</h4>
              </Card>
          </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )
}
export default ExploreEpisodes