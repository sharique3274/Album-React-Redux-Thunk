import { GET_ALBUMDETAILS } from "./types";
import axios from "axios";

export const getAlbumDetails = () => async dispatch => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?albumId=10"
  );
  dispatch({
    type: GET_ALBUMDETAILS,
    payload: res.data
  });
};
