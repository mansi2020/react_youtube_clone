import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':"4986fb1656msh3ef2babc5c69ce5p1f9345jsn4373e881a9bb",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }
