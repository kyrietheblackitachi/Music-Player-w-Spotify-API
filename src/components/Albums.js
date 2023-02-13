import React from 'react'
import { Box,Grid,Card } from '@mui/material'
const Albums = ({artists}) => {
  const artistAlbums=artists.artistAlbums
  return (
    <Box>
      <h2>Albums</h2>
      <Grid  container rowSpacing={2} columnSpacing={2}>{artistAlbums?.data.artist.discography.albums.items.map((album)=>{
      return(
        <Grid item  sm={4} xs={6} md={3}>
        <Card  className='albums-card'>
          <img src={album.releases.items[0].coverArt.sources[2].url}/>
          <h4>Name-{album.releases.items[0].name}</h4>
          <h4>Year-{album.releases.items[0].date.year}</h4>
          <h4>Tracks No.-{album.releases.items[0].tracks.totalCount}</h4>
        </Card>
        </Grid>
      )
      })}
      </Grid>
    </Box>
  )
}

export default Albums