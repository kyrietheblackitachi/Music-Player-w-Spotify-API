import React from "react";
import Home from "./Home";
import {Route,Routes} from "react-router-dom";
// component imports//
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Playlists from "./components/Playlists";
import Tracks from "./components/Tracks";
import Explore from "./components/Explore";
import Recent from "./components/Recent";
import Favourite from "./components/Favourite";
// explore imports//
import ExploreAlbums from "./ExploreComponents/ExploreAlbums";
import ExploreArtists from "./ExploreComponents/ExploreArtists";
import ExploreEpisodes from "./ExploreComponents/ExploreEpisodes";
import ExplorePlaylist from "./ExploreComponents/ExplorePlaylist";
import ExplorePodCast from "./ExploreComponents/ExplorePodCast";

// fetch imports//
import {fetchArtist,fetchArtistOverview,fetchArtistSingles,fetchArtistAlbums,options} from './fetchData'
import {fetchAlbums,fetchAlbumTracks,fetchAlbumMetaData} from './fetchData'
import {fetchTracks} from './fetchData'
import {fetchSearch} from './fetchData'
// hooks //
import { useState,useEffect } from 'react';

function App() {
  //useState
  const[explore,setExplore]=useState(false)
  const[artists,setArtists]=useState(false)
  const[track,setTrack]=useState(false)
  const[input,setInput]= useState('')
  const[isLoading,setIsLoading]=useState(true)
  const [activeBar, setActiveBar]=useState('1')
  const [id, setID]=useState('')
  useEffect(()=>{
    fetchSearchData()
    fetchArtistData()
    fetchAlbumData()
    fetchTrackData()
    ID()
  },[])
  //---------------fetchID=========//
  const ID=async()=>{
    const getID=await fetch('https://spotify81.p.rapidapi.com/artist_related?id=2w9zwq3AktTeYYMuhMjju8',options)
    const response= await getID.json()
    setID(response)
    console.log(id)
  }
   //=====================fetching data================//
    const fetchSearchData=async()=>{
      const search = await fetchSearch(`https://spotify23.p.rapidapi.com/search/?q=${input}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`,options)
      setExplore(search)
      setIsLoading(false) 
    }
    
    const fetchArtistData=async()=>{
     
      const artists = await fetchArtist(`https://spotify23.p.rapidapi.com/artists/?ids=${id}`,options)
      const artistOverview = await fetchArtistOverview(`https://spotify23.p.rapidapi.com/artist_overview/?id=${id}`,options)
      const artistSingles = await fetchArtistSingles(`https://spotify23.p.rapidapi.com/artist_singles/?id=${id}&offset=0&limit=20`,options)
      const artistAlbums = await fetchArtistAlbums(`https://spotify23.p.rapidapi.com/artist_albums/?id=${id}&offset=0&limit=100`,options)
      setArtists({artists,artistOverview,artistSingles,artistAlbums}) 
      setIsLoading(false) 
    }
    const fetchAlbumData=async()=>{
      const albums = await fetchAlbums('https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv',options)
      const albumTracks = await fetchAlbumTracks('https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300',options)
      const albumMetaData = await fetchAlbumMetaData('https://spotify23.p.rapidapi.com/album_metadata/?id=3IBcauSj5M2A6lTeffJzdv',options)
      return[albums,albumTracks,albumMetaData]
    }
    const fetchTrackData=async()=>{
      const tracks = await fetchTracks('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners',options)
      setTrack({tracks})
      setIsLoading(false) 
    }
    // const fetchPlaylistData=async()=>{
    //   const playlistData = await fetchGetPlaylist('https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP',options)
    //   setPlaylist({playlistData})
    //   setIsLoading(false) 
    // }
  return (


      <Routes>
        <Route path='/' element= {<Home activeBar={activeBar} setActiveBar={setActiveBar} fetchSearchData={fetchSearchData} fetchArtistData={fetchArtistData} fetchAlbumData={fetchAlbumData} fetchTrackData={fetchTrackData} isLoading={isLoading}input={input} setInput={setInput}/>}>
          <Route path='/' element={<Explore/>}/>

              <Route path="explore/albums" element={!isLoading&&<ExploreAlbums  explore={explore}/>}/>
              <Route path="explore/artists" element={!isLoading&&<ExploreArtists  explore={explore}/>}/>
              <Route path="explore/episodes" element={!isLoading&&<ExploreEpisodes explore={explore}/>}/>
              <Route path="explore/playlists" element={!isLoading&&<ExplorePlaylist explore={explore}/>}/>
              <Route path="explore/podcasts" element={!isLoading&&<ExplorePodCast explore={explore}/>}/> 
          <Route path='albums' element={!isLoading&&<Albums artists={artists} />}/>
          <Route path='artists' element={!isLoading&&<Artists artists={artists} input={input} setID={setID}/>}/>
          <Route path='tracks' element={!isLoading&&<Tracks track={track}/>}/>
          <Route path='recent' element={!isLoading&&<Recent/>}/>
          <Route path='favourite' element={!isLoading&&<Favourite/>}/>
          <Route path='playlist' element={!isLoading&&<Playlists   explore={explore}/>}/>
        </Route>
      </Routes>
  );
}

export default App;
            