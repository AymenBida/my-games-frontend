import { combineReducers } from 'redux';
import games from './games';
import credentials from './credentials';
import loginStatus from './loginStatus';
import game from './game';
import favourites from './favourites';

export default combineReducers({
  games, credentials, loginStatus, game, favourites,
});
