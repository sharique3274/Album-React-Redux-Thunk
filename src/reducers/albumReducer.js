import { GET_ALBUMDETAILS } from "../actions/types";

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
    default:
      return state;
  }
}
