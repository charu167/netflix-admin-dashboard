import {
  getMoviesFaliure,
  getMoviesStart,
  getMoviesSuccess,
  createMovieStart,
  createMovieSuccess,
  createMovieFaliure,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFaliure,
} from "./MovieActions";
import axios from "axios";

//GET
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());

  await axios
    .get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(getMoviesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getMoviesFaliure());
      console.log(err);
    });
};

//CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());

  await axios
    .post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(createMovieSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createMovieFaliure());
      console.log(err);
    });
};

//DELETE
export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMovieStart());

  await axios
    .delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(deleteMovieSuccess(id));
    })
    .catch((err) => {
      dispatch(deleteMovieFaliure());
      console.log(err);
    });
};
