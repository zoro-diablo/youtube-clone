import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'bb435cecc7msh5e15930da96ba0ep1d7249jsnbe1b75ade199',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
