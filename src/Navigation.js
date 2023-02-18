import React from 'react'
import { Container,Box,Stack} from '@mui/system'
import { ListItem,List,ListItemIcon } from '@mui/material'
import category from './images/category.png'
import favorite from './images/favorite.png'
import recent from './images/recent.png'
import show from './images/show.png'
import tracks from './images/tracks.png'
import artists from './images/artists.png'
import album from './images/album.png'
import add from './images/add.png'
import explore from './images/explore.png'
import headphone from './images/headphone.png'
import { Link, matchPath, resolvePath } from 'react-router-dom'
import { useState } from 'react';
const Navigation = ({activeBar,setActiveBar}) => {
  
  return (
    <Box className='navigation'>
        {/* <Stack direction='row'className='logo'><img src={tracks} alt='tracks'/><h2>eengle</h2><img className='headphone' src={headphone} alt='headphone'/></Stack> */}
        <List className='menus'>
            <ListItem><h3>MENU</h3></ListItem>
            <Link to='/'><ListItem  onClick={()=>{setActiveBar('1')}} className={activeBar==='1'?'explore current':'explore'}><h4>Explore</h4><img src={explore} alt='explore'/></ListItem></Link>
            <Link to='/albums'><ListItem onClick={()=>{setActiveBar('2')}}className={activeBar==='2'?'album current':'album'}><h4>Albums</h4><img src={album} alt='album'/></ListItem></Link>
            <Link to='/single'><ListItem onClick={()=>{setActiveBar('3')}}className={activeBar==='3'?'single current':'single'}><h4>Singles</h4><img src={album} alt='album'/></ListItem></Link>
            <Link to='/artists'><ListItem  onClick={()=>{setActiveBar('4')}}className={activeBar==='4'?'artists current':'artist'}><h4>Artists</h4><img src={artists} alt='artist'/></ListItem></Link>
            <Link to='/tracks'><ListItem  onClick={()=>{setActiveBar('5')}}className={activeBar==='5'?'tracks current':'tracks'}><h4>Top 20 Monthly</h4><img src={tracks} alt='tracks'/></ListItem></Link>
        </List>
        <List className='library'>
            <ListItem><h3>LIBRARY</h3></ListItem>
            <Link to='/recent'><ListItem className='recent'><h4>Recent</h4><img src={recent} alt='recent'/></ListItem></Link>
            <Link to='/favourite'><ListItem className='favourite'><h4>Favourites</h4><img src={favorite} alt='favorite'/></ListItem></Link>
        </List>
        <List className='playlist'>
          <ListItem><h3>PLAYLIST</h3></ListItem>
          <Link to='/playlist'><ListItem className='add'><h4>View Playlist</h4><img src={add} alt='add'/></ListItem></Link>
        </List>
    </Box>
  )
}

export default Navigation