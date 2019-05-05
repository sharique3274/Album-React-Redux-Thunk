import { GET_ALBUMDETAILS, ADD_IMAGE } from "../actions/types";

const initialState = {
  albumDetails: [],
  singleAlbum: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMDETAILS:
      return {
        ...state,
        albumDetails: action.payload
      };

    case ADD_IMAGE:
      return {
        ...state,
        albumDetails: [action.payload, ...state.albumDetails]
      };
    default:
      return state;
  }
}
