import { combineReducers } from 'redux';
import SongReducer from './songs.reducer';

const rootReducer = combineReducers({
  search_song: SongReducer
});

export default rootReducer;
