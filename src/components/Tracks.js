import React from 'react'
import { Box,Card,Grid } from '@mui/material'
const Tracks = ({track}) => {
  const tracks=track.tracks
  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={2}>{tracks.map((item)=>{
        return(
          <Grid item  sm={4} xs={6} md={3}>
            <Card  className='albums-card'>
              <h3>Rank:{item.rank}</h3>
              <h3>Rank:{item.artist}</h3>
              <h3>Rank:{item.monthlyListeners}</h3>
            </Card>
          </Grid>
          )
        })}
      </Grid>  
    </Box>
  )
}

export default Tracks

