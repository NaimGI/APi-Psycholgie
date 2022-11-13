import "./login.scss"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {AuthContext} from "../../context/AuthContext.js";
import {useState,useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [place,setPlace]=useState(true);
  const [pass,setPassword]=useState(true);
  const {dispatch,loading,error}=useContext(AuthContext);
  const navigate=useNavigate();
  const [Cread,setCread]=useState({
    username:undefined,
    password:undefined
  });
  const handleChange=(e)=>{
      setCread((prev)=>({...prev,[e.target.id]:e.target.value}));
}
const handleClick=async(e)=>{
  e.preventDefault();
  dispatch({ type: "LOGIN_START" });
    try{
      const res=await axios.post("http://localhost:5000/api/auth/",Cread,{withCredentials: true});
     if(res.data.isAdmin){
       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.detail});
       navigate("/");
      }else{
         dispatch({
         type: "LOGIN_FAILED",
         payload: { message: "You are not allowed!" },
  });}

}catch(err){
  dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
}
}

  
  return (
    <div>
      <div className="form">
        <form >
          <h2>Thearapay Login</h2>
          <div className="form_controle">
          <PersonIcon className="Icon" />
            <input type="text"  id="username" onChange={handleChange} placeholder={place?"Enter Your Name":""} onFocus={()=>setPlace(false)} onBlur={()=>setPlace(true)} />
          </div>
          <div className="form_controle">
          <LockIcon className="Icon" />
            <input type="password"  id="password" onChange={handleChange} placeholder={pass?"Enter Your Name":""} onFocus={()=>setPassword(false)} onBlur={()=>setPassword(true)} />
          </div>
          <div className="form_controle">
          <button className="btnLogin" disabled={loading} onClick={handleClick}>Login</button>
          </div>
         {error && <span className="invalid">{error.message}</span>}
        </form>
      </div>
    </div>
  )
}

export default Login