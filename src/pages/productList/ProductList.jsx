import React, { useContext, useEffect, useState } from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import { MoviesContext } from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovies } from "../../context/movieContext/apiCalls";

const ProductList = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  console.log(movies);

  const handleDelete = (id) => {
    deleteMovies(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Age Limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/product/" + params.row._id,
                movie: params.row,
              }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params.row._id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        // rowsPerPageOptions={[5]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default ProductList;
