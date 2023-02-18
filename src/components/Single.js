import React from 'react'
import { Box,Grid,Card } from '@mui/material'
const Single = ({artists,setID,input,isLoading}) => {
  const artistSingles=artists.artistSingles
  return (
    <Box className='nav-single'>
        <h2>Singles</h2>
        {isLoading&&<Box>
        <Grid container rowSpacing={2} columnSpacing={2}>{artistSingles?.data.artist.discography.singles.items.map((singles)=>{
          return(
          <Grid item sm={4} xs={6} md={3}>
          <Card className='singles-card'>
            <img src={singles.releases.items[0].coverArt.sources[0].url}/>
            <h4>Name-{singles.releases.items[0].name}</h4>
            <h4>Year-{singles.releases.items[0].date.year}</h4>
            <h4>Tracks No.-{singles.releases.items[0].tracks.totalCount}</h4>
          </Card>
          </Grid>)
        })}
        </Grid>
        </Box>}
    </Box>
  )
}

export default Single