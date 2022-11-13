import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import useFetch from "../../Hook/useFetch.js";
import { CircularProgress } from '@mui/material';

const Datatable = ({type}) => {
  
  const location=useLocation();
  const path=location.pathname.split("/")[1];
  console.log(path);
  const [List, setList] = useState();
  const {data,error,loading}= useFetch(`http://localhost:5000/api/${path}/`);
  console.log(loading);
   useEffect(() => {
    setList(data);
   
    }, [data]);
      
  console.log(List);

  const handleDelete=async (id)=>{
    try{
      alert("Are Your sure To Delete This User !");
      await axios.delete(`http://localhost:5000/api/${path}/${id}`)
      setList(List.filter((item)=> item._id !==id ));
    }catch(err){
      console.log(err);
    }
   
  }
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`view/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            {path === "Parent"?(<Link to={`new/${params.row._id}`} style={{ textDecoration: "none" }}>
            <div className="AddButton">
              Add Children
            </div>
            </Link>):("")}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
     
     { List && <>  <div className="datatableTitle">
        Add New User
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      
      {loading?(<div className="center"><CircularProgress className="cirle"/></div>):(<DataGrid
        className="datagrid"
        rows={List}
        columns={type.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />)}</>}
    </div>
  );
};

export default Datatable;
