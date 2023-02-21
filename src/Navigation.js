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
        <List className='menus'>
            <Link to='/'><ListItem  onClick={()=>{setActiveBar('1')}} className={activeBar==='1'?'explore current':'explore'}><img src={explore} alt='explore'/></ListItem></Link>
            <Link to='/albums'><ListItem onClick={()=>{setActiveBar('2')}}className={activeBar==='2'?'album current':'album'}><img src={album} alt='album'/></ListItem></Link>
            <Link to='/single'><ListItem onClick={()=>{setActiveBar('3')}}className={activeBar==='3'?'single current':'single'}><img src={album} alt='album'/></ListItem></Link>
            <Link to='/artists'><ListItem  onClick={()=>{setActiveBar('4')}}className={activeBar==='4'?'artists current':'artists'}><img src={artists} alt='artist'/></ListItem></Link>
            <Link to='/tracks'><ListItem  onClick={()=>{setActiveBar('5')}}className={activeBar==='5'?'tracks current':'tracks'}><img src={tracks} alt='tracks'/></ListItem></Link>
            <Link to='/recent'><ListItem  onClick={()=>{setActiveBar('6')}}className={activeBar==='6'?'recent current':'recent'}><img src={recent} alt='recent'/></ListItem></Link>
            <Link to='/favourite'><ListItem  onClick={()=>{setActiveBar('7')}}className={activeBar==='7'?'favorite current':'favorite'}><img src={favorite} alt='favorite'/></ListItem></Link>
          <Link to='/playlist'><ListItem  onClick={()=>{setActiveBar('8')}}className={activeBar==='8'?'add current':'add'}><img src={add} alt='add'/></ListItem></Link>
        </List>
    </Box>
  )
}

export default Navigation