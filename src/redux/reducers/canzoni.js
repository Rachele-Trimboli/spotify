import { ADD_SONGS } from "../actions";

const initialState = {
  arrayOfSongs: [],
};

const addSongsSearched = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS:
      return {
        ...state,
        arrayOfSongs: [action.payload],
      };

    default:
      return state;
  }
};
export default addSongsSearched;
