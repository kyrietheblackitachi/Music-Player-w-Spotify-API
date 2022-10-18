import React from "react";
import { Box } from "@mui/system";
import Home from "./Home";
import {Route,Routes} from "react-router-dom";
// component imports//
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Extras from "./components/Extras";
import Episodes from "./components/Episodes";
import Players from "./components/Players";
import Playlists from "./components/Playlists";
import Tracks from "./components/Tracks";
import Users from "./components/Users";
import Explore from "./components/Explore";
import Recent from "./components/Recent";
import Favourite from "./components/Favourite";
// explore imports//
import ExploreAlbums from "./ExploreComponents/ExploreAlbums";
import ExploreArtists from "./ExploreComponents/ExploreArtists";
import ExploreEpisodes from "./ExploreComponents/ExploreEpisodes";
import ExplorePlaylist from "./ExploreComponents/ExplorePlaylist";
import ExplorePodCast from "./ExploreComponents/ExplorePodCast";
import ExploreTracks from "./ExploreComponents/ExploreTracks";
// fetch imports//
import {fetchArtist,fetchArtistOverview,fetchArtistSingles,fetchArtistDiscography,fetchArtistAlbums,fetchArtistAppearsOn,fetchArtistDiscoveredOn,fetchArtistFeaturing,fetchArtistRelated,options} from './fetchData'
import {fetchAlbums,fetchAlbumTracks,fetchAlbumMetaData} from './fetchData'
import {fetchTracks,fetchTrackCredit,fetchTrackLyrics} from './fetchData'
import {fetchGetPlaylist,fetchPlaylistTracks} from './fetchData'
import {fetchUserProfile,fetchUserFollowers} from './fetchData'
import {fetchRadioPlaylist} from './fetchData'
import {fetchSearch} from './fetchData'
// hooks //
import { useState,useEffect,useCallback } from 'react';

function App() {
  //useState
  const[explore,setExplore]=useState(false)
  const[artists,setArtists]=useState(false)
  const[track,setTrack]=useState(false)
  const[input,setInput]= useState('drake')
  const[isLoading,setIsLoading]=useState(true)
  const [activeBar, setActiveBar]=useState('1')
  //useEffect
  useEffect(()=>{
    //search Data
    fetchSearchData()
    fetchArtistData()
    fetchAlbumData()
    fetchTrackData()
  },[input])

   //=====================fetching data================//
    const fetchSearchData=async()=>{
      const search = await fetchSearch(`https://spotify23.p.rapidapi.com/search/?q=${input}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`,options)
      setExplore(search)
      setIsLoading(false) 
    }
    
    const fetchArtistData=async()=>{
      const artists = await fetchArtist('https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8',options)
      const artistOverview = await fetchArtistOverview('https://spotify23.p.rapidapi.com/artist_overview/?id=2w9zwq3AktTeYYMuhMjju8',options)
      const artistSingles = await fetchArtistSingles('https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=20',options)
      const artistAlbums = await fetchArtistAlbums('https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100',options)
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
      const tracks = await fetchTracks('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv',options)
      const tracksLyrics = await fetchTrackLyrics('https://spotify23.p.rapidapi.com/track_lyrics/?id=1brwdYwjltrJo7WHpIvbYt',options)
      setTrack({tracks,tracksLyrics})
      setIsLoading(false) 
    }
    // const fetchPlaylistData=async()=>{
    //   const playlistData = await fetchGetPlaylist('https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP',options)
    //   setPlaylist({playlistData})
    //   setIsLoading(false) 
    // }
  return (


      <Routes>
        <Route path='/' element= {<Home activeBar={activeBar} setActiveBar={setActiveBar} fetchSearchData={fetchSearchData} fetchArtistData={fetchArtistData} fetchAlbumData={fetchAlbumData} fetchTrackData={fetchTrackData} isLoading={isLoading}input={input}/>}>
          <Route path='/' element={<Explore/>}/>
          //explore Routes//
              <Route path="explore/albums" element={!isLoading&&<ExploreAlbums  explore={explore}/>}/>
              <Route path="explore/artists" element={!isLoading&&<ExploreArtists  explore={explore}/>}/>
              <Route path="explore/episodes" element={!isLoading&&<ExploreEpisodes explore={explore}/>}/>
              <Route path="explore/playlists" element={!isLoading&&<ExplorePlaylist explore={explore}/>}/>
              <Route path="explore/podcasts" element={!isLoading&&<ExplorePodCast explore={explore}/>}/> 
              <Route path="explore/tracks" element={!isLoading&&<ExploreTracks explore={explore}/>}/>
          <Route path='albums' element={!isLoading&&<Albums artists={artists} />}/>
          <Route path='artists' element={!isLoading&&<Artists artists={artists}/>}/>
          <Route path='tracks' element={!isLoading&&<Tracks track={track}/>}/>
          <Route path='recent' element={!isLoading&&<Recent/>}/>
          <Route path='favourite' element={!isLoading&&<Favourite/>}/>
          <Route path='playlist' element={!isLoading&&<Playlists   explore={explore}/>}/>
        </Route>
      </Routes>
  );
}

export default App;
            