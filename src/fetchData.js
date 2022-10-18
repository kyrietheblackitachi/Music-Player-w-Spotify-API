export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94b328a6b4mshcd87697532b3efep1dbe39jsnb51512ab3518',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};
/*======================SEARCH =====================*/
export const fetchSearch=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
    
}
/*======================AlBUM DATA =====================*/
export const fetchAlbums=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchAlbumTracks=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchAlbumMetaData=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}

/*==============================ARTIST DATA========================== */
export const fetchArtist=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistOverview=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistSingles=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistDiscography=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistAlbums=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistAppearsOn=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistDiscoveredOn=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistFeaturing=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchArtistRelated=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
/*====================TRACKS DATA============================== */
export const fetchTracks=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchTrackCredit=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchTrackLyrics=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}

/*=====================PLAYLIST DATA =================*/
export const fetchGetPlaylist=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchPlaylistTracks=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}

/*======================USERS DATA ============*/
export const fetchUserProfile=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
export const fetchUserFollowers=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}
/*EXTRAS DATA */
export const fetchRadioPlaylist=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
    return data
}