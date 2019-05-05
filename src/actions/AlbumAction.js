import { GET_ALBUMDETAILS, ADD_IMAGE, DELETE_IMAGE } from "./types.js";
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

export const deleteImage = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
    dispatch({
      type: DELETE_IMAGE,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_IMAGE,
      payload: id
    });
  }
};
