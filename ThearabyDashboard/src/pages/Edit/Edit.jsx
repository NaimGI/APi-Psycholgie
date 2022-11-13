
import "./Edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import useFetch from "../../Hook/useFetch.js";
const newUser = ({ inputs, title }) => {
  const [focused, setFocused] = useState(false);
  const [file, setFile] = useState("");
  const [info,setInfo]=useState({});
  const [check ,setChek]=useState(false);
  const navigate=useNavigate();

const {data,loading,error}=useFetch("");
  
const handleInputs=(e)=>{
  setInfo((prev)=>({...prev,[e.target.id]:e.target.value}));
}
console.log(info);
  const handleClick=async(e)=>{
    e.preventDefault();
    try{
    const newUser={
      ...info,
      isAdmin:check
    }
    
await axios.post(`http://localhost:5000/api/Admin/`,newUser);
navigate("/Admin");
    }catch(err){
      console.log(err);  
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleClick}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} id={input.id} onChange={handleInputs} value={input.value} required={input.required} pattern={input.pattern} onBlur={handleFocus} focused={focused.toString()}/>
                  <span className="sp">{input.errorMessage}</span>
                </div>
              ))}
              <button >Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newUser;