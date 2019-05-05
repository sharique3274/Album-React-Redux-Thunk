import { GET_ALBUMDETAILS, ADD_IMAGE, DELETE_IMAGE } from "../actions/types";

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
    case DELETE_IMAGE:
      return {
        ...state,
        albumDetails: state.albumDetails.filter(
          albumDetail => albumDetail.id !== action.payload
        )
      };
    default:
      return state;
  }
}
