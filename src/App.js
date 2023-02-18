import React from "react";
import Home from "./Home";
import {Route,Routes} from "react-router-dom";
// component imports//
import Albums from "./components/Albums";
import Single from "./components/Single";
import Artists from "./components/Artists";
import Playlists from "./components/Playlists";
import Top20 from "./components/Top20";
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
import {fetchData,options} from './fetchData'

// hooks //
import { useState,useEffect } from 'react';

function App() {
  //useState
  const[explore,setExplore]=useState(false)
  const[artist,setArtists]=useState(false)
  const[track,setTrack]=useState(false)
  const[input,setInput]= useState('')
  const[isLoading,setIsLoading]=useState(true)
  const [activeBar, setActiveBar]=useState('1')
  const [id, setID]=useState('')
  useEffect(()=>{
    fetchSearchData()
    fetchArtistData()
    fetchTop20Data()
  },[])
  //---------------fetchID=========//
  // const ID=async()=>{
  //   const getID=await fetch('https://spotify81.p.rapidapi.com/artist_related?id=2w9zwq3AktTeYYMuhMjju8',options)
  //   const response= await getID.json()
  //   setID(response)
  //   console.log(id)
  // }
   //=====================fetching data================//
    const fetchSearchData=async()=>{
      const search = await fetchData(`https://spotify23.p.rapidapi.com/search/?q=${input}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`,options)
      if (search){setIsLoading(false);setExplore(search)}
      
    }
    const fetchArtistData=async()=>{
      const artists = await fetchData('https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8',options)
      const artistOverview = await fetchData('https://spotify23.p.rapidapi.com/artist_overview/?id=2w9zwq3AktTeYYMuhMjju8', options)
      const artistSingles = await fetchData('https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=20', options)
      const artistAlbums = await fetchData('https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100', options)
      if (artists&&artistOverview&&artistSingles&&artistAlbums){setIsLoading(false);setArtists({artists,artistOverview,artistSingles,artistAlbums})} 

    }
    // top 20
    const fetchTop20Data=async()=>{
      const tracks = await fetchData('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', options)
      if (tracks){setIsLoading(false);setTrack({tracks})}

    }
  return (


      <Routes>
        <Route path='/' element= {<Home activeBar={activeBar} setActiveBar={setActiveBar} fetchSearchData={fetchSearchData} fetchArtistData={fetchArtistData}  fetchTrackData={fetchTop20Data} isLoading={isLoading}input={input} setInput={setInput}/>}>
          <Route path='/' element={<Explore/>}/>

              <Route path="explore/albums" element={!isLoading&&<ExploreAlbums  explore={explore}/>}/>
              <Route path="explore/artists" element={!isLoading&&<ExploreArtists  explore={explore}/>}/>
              <Route path="explore/episodes" element={!isLoading&&<ExploreEpisodes explore={explore}/>}/>
              <Route path="explore/playlists" element={!isLoading&&<ExplorePlaylist explore={explore}/>}/>
              <Route path="explore/podcasts" element={!isLoading&&<ExplorePodCast explore={explore}/>}/> 
          <Route path='albums' element={<Albums artists={artist} isLoading={isLoading}/>}/>
          <Route path='single' element={<Single artists={artist} isLoading={isLoading}/>}/>
          <Route path='artists' element={<Artists artists={artist} input={input} setID={setID} isLoading={isLoading}/>}/>
          <Route path='tracks' element={<Top20 track={track}/>}/>
          <Route path='recent' element={<Recent/>}/>
          <Route path='favourite' element={<Favourite isLoading={isLoading}/>}/>
          <Route path='playlist' element={<Playlists isLoading={isLoading}  explore={explore}/>}/>
        </Route>
      </Routes>
  );
}

export default App;
            