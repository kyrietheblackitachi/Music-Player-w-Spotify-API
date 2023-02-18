import React from 'react'
import { Box,Grid,Card,Stack } from '@mui/material';


const ExploreAlbums = ({explore}) => {

  const{items}=explore.albums
  return (
    <Box className='explore-album'>
      <h1>Explore Albums</h1>
      <Grid container rowSpacing={10} columnSpacing={3} className='explore-album-grid'>
        {items.map((item)=>{
          return(
            <Grid item xs={4} className='grid-item'>
              <Card className='explore-albums'>
              <img src={item.data.coverArt.sources[0].url}/>
              <a href={item.data.uri}>{item.data.name}</a>
              {/* <h4>Name:{item.data.name}</h4> */}
              <h4>Artist:{item.data.artists.items[0].profile.name}</h4>
              <h4>Release Date:{item.data.date.year}</h4>
              </Card>
          </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )
}
export default ExploreAlbums