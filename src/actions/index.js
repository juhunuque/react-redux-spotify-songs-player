import axios from 'axios';

const ROOT_URL = 'https://api.spotify.com/v1/search';

export const SEARCH_SONG = 'SEARCH_SONG';
export const CLEAR_SONG = 'CLEAR_SONG';

export function searchSong(song){
    const request = axios.get(ROOT_URL, {params:{
      type: 'track',
      q: song
    }
  });

  return{
    type: SEARCH_SONG,
    payload: request
  }
};

export function clearSong(){
  return{
    type: CLEAR_SONG,
    payload: []
  }
};
