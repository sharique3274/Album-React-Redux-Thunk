import { GET_ALBUMDETAILS, ADD_IMAGE } from "./types";
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
export const addImage = data => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/photos",
    data
  );
  dispatch({
    type: ADD_IMAGE,
    payload: res.data
  });
};
