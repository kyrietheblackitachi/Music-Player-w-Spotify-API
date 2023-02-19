import React from 'react'
import Navigation from './Navigation'
import Search from "./components/Search";
import { Container,Box,Stack} from '@mui/system'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './style.css'


function Home({setInput,isLoading,input,activeBar,setActiveBar,fetchSearchData,fetchAlbumData,fetchArtistData,fetchTrackData}) {
 
  return (
      <Box className='home'>
        <Box  className='display'>
          <div className='nav-box'>
            <Navigation activeBar={activeBar} setActiveBar={setActiveBar}/>
            <Search isLoading={isLoading}setInput={setInput}input={input} activeBar={activeBar} setActiveBar={setActiveBar} fetchSearchData={fetchSearchData}fetchAlbumData={fetchAlbumData }fetchArtistData={fetchArtistData}fetchTrackData={fetchTrackData}/>
          </div>
          <Box className='outlet-box'>
         
            <Outlet/>
          </Box>
        </Box> 
      </Box>
       
      

  )
}

export default Home