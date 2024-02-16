import { ADD_INPLAYER } from "../actions";

const initialState = {
  inPlayer: [],
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPLAYER:
      return {
        ...state,
        inPlayer: [action.payload],
      };

    default:
      return state;
  }
};
export default player;
