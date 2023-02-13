import React from 'react'
import { Box,Card,Grid } from '@mui/material'
const Top20 = ({track}) => {
  const tracks=track.tracks
  console.log(track)
  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={2}>{tracks?.map((item)=>{
        return(
          <Grid item  sm={4} xs={6} md={3}>
            <Card  className='top20'>
              <h3>Rank:{item.rank}</h3>
              <h3>Rank:{item.artist}</h3>
              <h3>Rank:{item.monthlyListeners}</h3>
              <button className='top20btn'>Check it Out!</button>
            </Card>
          </Grid>
          )
        })}
      </Grid>  
    </Box>
  )
}

export default Top20

