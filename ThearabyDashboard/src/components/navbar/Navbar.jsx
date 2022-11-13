import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { hasFlag } from 'country-flag-icons'
import {useState} from "react";
import i18next from  "i18next";
import cookies from 'js-cookie';
const Navbar = () => {
  const [show,setShow]=useState(false);
  const { dispatch } = useContext(DarkModeContext);
  const currentLanguageCode = cookies.get('i18next') || 'en'
  console.log(currentLanguageCode);
  const languages = [
    {
      code: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
      name: 'Français',
      country_code: 'fr',
      type:'fr'
    },
    {
      code: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
      name: 'English',
      country_code: 'gb',
      type:'en'
    },
    {
      code: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
      type:'ar'
    },
  ]

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" onClick={()=>setShow(!show)} />
            English
            
           {show && <div className="list">
            {languages.map(({code,name,country_code,type})=>(
              <div className="li" key={country_code} onClick={()=>{i18next.changeLanguage(type) ;setShow(false)}}><div><img alt="United States" src={code}/></div><div><span>{name}</span></div></div>
            ))}
            </div>}
          
            
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
