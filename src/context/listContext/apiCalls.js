import {
  getListsFaliure,
  getListsStart,
  getListsSuccess,
  createListStart,
  createListSuccess,
  createListFaliure,
  deleteListStart,
  deleteListSuccess,
  deleteListFaliure,
} from "./ListActions";
import axios from "axios";

//GET
export const getLists = async (dispatch) => {
  dispatch(getListsStart());

  await axios
    .get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(getListsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getListsFaliure());
      console.log(err);
    });
};

// CREATE
export const createList = async (list, dispatch) => {
  dispatch(createListStart());

  await axios
    .post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(createListSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createListFaliure());
      console.log(err);
    });
};

//DELETE
export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListStart());

  await axios
    .delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    .then((res) => {
      dispatch(deleteListSuccess(id));
    })
    .catch((err) => {
      dispatch(deleteListFaliure());
      console.log(err);
    });
};
