import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {useNavigate} from "react-router-dom"
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";
import axios from "axios";

const Sidebar = () => {
  const {t}=useTranslation();
  const { dispatch } = useContext(DarkModeContext);
  const navigate=useNavigate();
  const handelLogout=async()=>{
try {
  console.log("Hi IM in  logout !");
  await axios.get("http://localhost:5000/api/Admin/logout");
  localStorage.removeItem("user");
  navigate("/login");
} catch (err) {
  console.log(err);
}
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/"  style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t('Users')}</span>
            </li>
          </Link>
          <Link to="/Parent" style={{ textDecoration: "none" }}>
            <li>
              <FamilyRestroomIcon className="icon"/>
              <span>{t('Parents')}</span>
            </li>
          </Link>
          <Link to="/Children" style={{ textDecoration: "none" }}>
          <li>
            <ChildCareIcon className="icon" />
            <span>{t('Children')}</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handelLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
       
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
