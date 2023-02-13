export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cded203221msh91754d835848ac7p1ec8e7jsn6371dc04258b',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};
/*======================SEARCH =====================*/
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options)
    const data = await response.json()
	console.log(response.status)
    if(response.status===200){return data}else{return false}


}
