import React from 'react'
import { Box,Grid,Card,Stack } from '@mui/material';


const ExplorePodcast = ({explore}) => {

  const{items}=explore.podcasts
  return (
    <Box>
      <h1>Explore Podcast</h1>
      <Grid container rowSpacing={10} columnSpacing={3} className='explore-album-grid'>
        {items.map((item)=>{
          return(
            <Grid item   xs={6} sm={4} className='grid-item'>
              <Card className='explore-albums'>
              <img src={item.data.coverArt.sources[1].url}/>
              <a href={item.data.uri}>uri</a>
              <h4>Name:{item.data.name}</h4>
              <h4>Publisher:{item.data.publisher.name}</h4>
              </Card>
          </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )
}
export default ExplorePodcast