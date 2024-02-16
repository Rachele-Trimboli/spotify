import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import playerReducer from "../reducers/player";

const globalStore = combineReducers({
  player: playerReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: globalStore,
});
export default store;
