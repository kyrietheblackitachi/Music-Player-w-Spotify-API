import { useEffect } from 'react';
import { Box,Card,Grid } from '@mui/material'
const Artists = ({artists,setID,input}) => {
  const artist=artists.artists
  const artistOverview=artists.artistOverview
  const artistSingles=artists.artistSingles
  const artistAlbums=artists.artistAlbums
  console.log(artists)
  return (
    <Box>
      <Card className='artist2'>
        <h2>Name:{artist.artists[0].name}</h2>
        <img src={artist.artists[0].images[0].url}/> 
        <h4>Followers:{artist.artists[0].followers.total}</h4>
        <h3>Genres</h3>
        <Box>{artist.artists[0].genres.map((genre)=>{ 
          return <p>{genre}</p>
        })}
        <h4>No. of Singles Released:{artistOverview.data?.artist.discography.singles.items.length}</h4>
        <h4>No. of Albums Released:{artistOverview.data?.artist.discography.albums.items.length}</h4>
        </Box>
        <h1>Overview</h1>
  
      </Card>
      <Box>
        <h2>Singles</h2>
        <Grid container rowSpacing={2} columnSpacing={2}>{artistSingles.data?.artist.discography.singles.items.map((singles)=>{
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
      </Box>
      <Box>
        <h2>Albums</h2>
        <Grid  container rowSpacing={2} columnSpacing={2}>{artistAlbums.data?.artist.discography.albums.items.map((album)=>{
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
    </Box>

  )
}

export default Artists
