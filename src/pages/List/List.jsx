import React, { useContext, useEffect, useState } from "react";
import "./list.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists, deleteLists } from "../../context/listContext/apiCalls";

const List = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  console.log(lists);

  const handleDelete = (id) => {
    deleteLists(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    { field: "title", headerName: "title", width: 120 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "Age type", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/list/" + params.row._id,
                list: params.row,
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        rowsPerPageOptions={[5]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default List;
