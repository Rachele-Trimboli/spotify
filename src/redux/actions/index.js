export const ADD_INPLAYER = "ADD_INPLAYER";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";

export const addToPlayer = (song) => {
  return {
    type: ADD_INPLAYER,
    payload: song,
  };
};

export const addToFavourites = (favourite) => {
  return {
    type: ADD_FAVOURITES,
    payload: favourite,
  };
};

export const removeToFavourites = (notfavourite) => {
  return {
    type: REMOVE_FAVOURITES,
    payload: notfavourite,
  };
};
