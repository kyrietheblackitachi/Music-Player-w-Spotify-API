import React from 'react'
import { Box,Card,Grid } from '@mui/material'
const Tracks = ({track}) => {
  const tracks=track.tracks
  const lyrics=track.tracksLyrics
  return (
    <Box>
        <h1>Tracks</h1>
        <img src={tracks.tracks[0].images[0].url}/>
        <h3>{tracks.tracks[0].name}</h3>
        <h3>{tracks.tracks[0].popularity}</h3>
        <h3>{tracks.tracks[0].track_number}</h3>
        <Box>Artist{tracks.tracks[0].artists.map((artist)=>{
          return(
            <Box>
              <h3>{artist.id}</h3>
              <h3>{artist.name}</h3>
            </Box>
          )
        })}
        </Box>
        <Box>
            {track.tracksLyrics.lyrics.lines.map((line)=>{
              <h4>{line}</h4>
            })}
        </Box>
    </Box>
  )
}

export default Tracks