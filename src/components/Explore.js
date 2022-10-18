import React from 'react'
import { Box,Card, Grid } from '@mui/material'
// import ExploreAlbums from "../ExploreComponents/ExploreAlbums";
// import ExploreArtists from "../ExploreComponents/ExploreArtists";
// import ExploreEpisodes from "../ExploreComponents/ExploreEpisodes";
// import ExplorePlaylist from "../ExploreComponents/ExplorePlaylist";
// import ExplorePodCast from "../ExploreComponents/ExplorePodCast";
// import ExploreTracks from "../ExploreComponents/ExploreTracks";
import { Link } from 'react-router-dom';

const Explore = ({explore}) => {
  // const{albums,artists,episodes,genres,playlists,podcasts,topResults,tracks,users}=explore
  return (

    <Box className='explore-box'>
      <h1>Explore</h1>
      <Grid  className='explore-grid' container rowSpacing={10} columnSpacing={3}>
        <Grid   xs={6} sm={4} item><Link to='/explore/albums'><Card className='explore-item'><h2>Albums</h2></Card></Link></Grid>
        <Grid  xs={6}  sm={4}item><Link to='/explore/artists'><Card className='explore-item'><h2>Artists</h2></Card></Link></Grid>
        <Grid  xs={6}  sm={4}item><Link to='/explore/episodes'><Card className='explore-item' ><h2>Episodes</h2></Card></Link></Grid>
        <Grid  xs={6} sm={4} item><Link to='/explore/playlists'><Card className='explore-item'><h2>Playlists</h2></Card></Link></Grid>
        <Grid  xs={6}  sm={4}item><Link to='/explore/podcasts'><Card className='explore-item'><h2>Podcasts</h2></Card></Link></Grid>
      </Grid>
    </Box>

  )
}

export default Explore