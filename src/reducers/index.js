import { combineReducers } from 'redux';
import Auth from './Auth.js';
import Food from './Food.js';
import Favourite from './Favorite.js';

export default combineReducers({
    auth: Auth,
    food: Food,
    favourite: Favourite

});