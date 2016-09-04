import {SEARCH_SONG, CLEAR_SONG} from './../actions/index';

export default function(state=[], action){
  switch(action.type){
    case SEARCH_SONG:
      return [action.payload.data.tracks.items];

    case CLEAR_SONG:
      return action.payload;

    default:
    return state;
  }
}
