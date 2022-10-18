import React from 'react'
import Navigation from './Navigation'
import Search from "./components/Search";
import { Container,Box,Stack} from '@mui/system'
import { Outlet } from 'react-router-dom';
import './style.css'


function Home({isLoading,input,activeBar,setActiveBar,fetchSearchData,fetchAlbumData,fetchArtistData,fetchTrackData}) {

 
  return (
      <Box className='home'>
        <Box className='navigation-box'>
          <Navigation activeBar={activeBar} setActiveBar={setActiveBar}/>
        </Box>  
        <Box  className='display'>
          <Search isLoading={isLoading}input={input} activeBar={activeBar} setActiveBar={setActiveBar} fetchSearchData={fetchSearchData}fetchAlbumData={fetchAlbumData }fetchArtistData={fetchArtistData}fetchTrackData={fetchTrackData}/>
          <Box className='outlet-box'>
            <Outlet/>
          </Box>
        </Box> 
      </Box>
       
      

  )
}

export default Home