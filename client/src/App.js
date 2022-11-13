import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ParentForm from "./pages/ParentForm/ParentForm.jsx";
import ChildrenForm from "./pages/ChildrenForm/ChildrenForm.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import {ChildrenInputs,inputParents} from "./containers/formulaire/formulaireInputs";
import {useContext} from "react";
import {AuthContext} from "./Context/Authcontext.js";


function App() {
  const ProutectedRoute=({children})=>{
    const {user}=useContext(AuthContext);
    console.log(user);
    if(!user){
     return  <Navigate to="/"/>
    }
    return children;

  }
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
    <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="Register">
          <Route index  element={<ParentForm/>}/>
           <Route path="parent/:id" >
            <Route index element={<ChildrenForm/>}/>
            <Route path="Dashboard/:idParent" element={<Dashboard/>}/>
           </Route>
       </Route>
      <Route path="Dashboard/:parentId" element={<ProutectedRoute><Dashboard/></ProutectedRoute>}/>
    </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
