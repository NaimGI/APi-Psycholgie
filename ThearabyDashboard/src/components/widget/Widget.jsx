import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import QuizIcon from '@mui/icons-material/Quiz';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import useFetch from "../../Hook/useFetch.js";
import {useState,useEffect} from "react";
import { CircularProgress } from '@mui/material';

const Widget = ({ type }) => {
  let dataa;
  const [amount,setAmount]=useState()
  const {data,error,loading}=useFetch(`http://localhost:5000/api/${type}/UserNumber`);
  useEffect(() => {
  setAmount(data)
  }, [data]);

 
  const diff = 20;

  switch (type) {
    case "Admin":
      dataa = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Parent":
      dataa = {
        title: "Parents",
        isMoney: false,
        link: "View all Parents",
        icon: (
          <FamilyRestroomIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "test":
      dataa = {
        title: "Testing",
        isMoney: true,
        link: "View all Testing",
        icon: (
          <QuizIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "Children":
      dataa = {
        title: "Children",
        isMoney: true,
        link: "See details",
        icon: (
          <ChildCareIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <> {loading?(<CircularProgress/>):data && <div className="widget">
      <div className="left">
        <span className="title">{dataa.title}</span>
        <span className="counter">
           {amount}
        </span>
        <span className="link">{dataa.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {dataa.icon}
      </div>
    </div>}</>
  );
};

export default Widget;
