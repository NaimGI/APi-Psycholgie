import "./newChild.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

const NewChild = ({ inputs, title }) => {
  const [focused, setFocused] = useState(false);
  const [file, setFile] = useState("");
  const [info,setInfo]=useState({});
  const {id}=useParams();
  console.log(id);
  const handleFocus = (e) => {
    setFocused(true);
  };
const handleInputs=(e)=>{
  setInfo((prev)=>({...prev,[e.target.id]:e.target.value}));
}
console.log(info);

  const handleClick=async(e)=>{
    e.preventDefault();
    try{
      const formData=new FormData();
      formData.append("file",file);
      formData.append("upload_preset","thearapy");
    const res=await axios.post("https://api.cloudinary.com/v1_1/nothink/image/upload",formData);
  
    const {url}=res.data;
    const newChild={
      ...info,
      img:url
    }

     await axios.post(`http://localhost:5000/api/Children/${id}`,newChild);
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
                  <input type={input.type} placeholder={input.placeholder} id={input.id} onChange={handleInputs} required={input.required} pattern={input.pattern} onBlur={handleFocus} focused={focused.toString()} />
                </div>
              ))}
               <div className="formInput">
                <label>parents Case</label>
                <select id="parentsCase" onChange={handleInputs} required>
                <option value="">Choise Case of Parents</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Normal">Normal</option>
                  <option value="parentsDead">parentsDead</option>
                  <option value="OneParent">OneParent</option>
                </select>
              </div>
              <div className="formInput">
                <label>parents Case</label>
                <select id="sexe" onChange={handleInputs} required>
                  <option value="">Choise Sexe of child</option>
                  <option value="Girl" >Girl</option>
                  <option value="Boy">Boy</option>
                </select>
              </div>
              <button >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChild;