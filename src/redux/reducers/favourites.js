import { ADD_FAVOURITES, REMOVE_FAVOURITES } from "../actions";

const initialState = {
  favourites: [],
};

const addToFavourites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((favorito) => favorito !== action.payload),
        ],
      };

    default:
      return state;
  }
};
export default addToFavourites;
