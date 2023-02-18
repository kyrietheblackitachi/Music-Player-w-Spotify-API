import React from 'react'
import Navigation from './Navigation'
import Search from "./components/Search";
import { Container,Box,Stack} from '@mui/system'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './style.css'


function Home({setInput,isLoading,input,activeBar,setActiveBar,fetchSearchData,fetchAlbumData,fetchArtistData,fetchTrackData}) {
  const [show,setShow]=useState(false)
  const navSlide=()=>{
    setShow(i=>!i)
  }
 
  return (
      <Box className='home'>
         <div className='nav-box'>
            {show &&<Navigation activeBar={activeBar} setActiveBar={setActiveBar}/>}
          </div>
        <Box  className='display'>
          
          <Box className='outlet-box'>
          <button onClick={navSlide}>nav</button> 
          <Search isLoading={isLoading}setInput={setInput}input={input} activeBar={activeBar} setActiveBar={setActiveBar} fetchSearchData={fetchSearchData}fetchAlbumData={fetchAlbumData }fetchArtistData={fetchArtistData}fetchTrackData={fetchTrackData}/>
            <Outlet/>
          </Box>
        </Box> 
      </Box>
       
      

  )
}

export default Home