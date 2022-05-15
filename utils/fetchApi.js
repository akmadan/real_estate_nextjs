import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '49cdf47f02mshd256db2f839ae13p12bcfajsn4e4dcf7b2d09'
      },
  });
    
  return data;
}