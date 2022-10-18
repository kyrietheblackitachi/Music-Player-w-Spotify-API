import { TextField,Stack,Box} from "@mui/material";
// import React,{useState} from 'react'
import search from '../images/search.png'

const Search = ({setInput,isLoading,input,activeBar,setActiveBar,fetchSearchData,fetchAlbumData,fetchArtistData,fetchTrackData}) => {
  const handleSearch=()=>{
    if(activeBar==='1'){fetchSearchData()}
    if(activeBar==='2'){fetchAlbumData()}
    if(activeBar==='3'){fetchArtistData()}
    if(activeBar==='6'){fetchSearchData()}
    setInput('')
  }

  return (
    <Box className='load-box'>
    <Stack className='search-bar' direction='row'>
      < TextField autoComplete='off' className='search'placeholder="Search..."  value={input} onChange={(e)=>setInput(e.target.value.toLowerCase())}/><img onClick={handleSearch} className='search-btn' src={search} alt='search'/>
    </Stack>
    {isLoading && <h4 className="update">Loading...</h4>}
    {isLoading && <h4 >Oops no Internet connection :)/Out of API calls</h4>}
    </Box>
    
  )
}
export default Search