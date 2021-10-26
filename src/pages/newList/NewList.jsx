import React, { useContext, useEffect, useState } from "react";
import "./newList.css";
import storage from "../../firebase";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { createList } from "../../context/listContext/apiCalls";
import { MoviesContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { useHistory } from "react-router-dom";

const NewProduct = () => {
  const [list, setList] = useState(null);

  const history = useHistory();
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: movieDispatch } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(movieDispatch);
  }, [movieDispatch]);

  const handleChange = (event) => {
    const value = event.target.value;

    setList({ ...list, [event.target.name]: value });
  };

  const handleSelect = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setList({ ...list, [event.target.name]: value });
  };

  console.log(list);

  const handleSubmit = (event) => {
    event.preventDefault();

    createList(list, dispatch);
    history.push("/lists");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Popular Movies"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>type</label>
          <select name="type" onChange={handleChange}>
            <option>type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="action"
            name="genre"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content" onChange={handleSelect}>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>

        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
