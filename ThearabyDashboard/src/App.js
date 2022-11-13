import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import { parentsInputs, userInputs,ChildrenInputs } from "./formSource";
import {parentsColumns,userColumns,ChildrenColumns} from "./datatablesource";
import "./style/dark.scss";
import { useContext } from "react";
import {AuthContext} from "./context/AuthContext.js";
import { DarkModeContext } from "./context/darkModeContext";
import NewUser from "./pages/newUser/newUser.jsx";
import NewChild from "./pages/newChild/newchild.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import SinglePar from "./pages/singleParent/singlePar.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const ProutectedRoute=({children})=>{
    const {user}=useContext(AuthContext);
  
    if(!user){
     return  <Navigate to="/login"/>
    }
    return children;

  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
               <ProutectedRoute>
              <Home /> 
              </ProutectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="Admin" >
              <Route index element={ <ProutectedRoute><List type={userColumns}  /></ProutectedRoute>} />
              <Route path="view/:userId" element={<ProutectedRoute><Single role="Admin" inputs={userInputs}/></ProutectedRoute>}/>
              <Route
                path="new"
                element={<ProutectedRoute><NewUser inputs={userInputs} title="Add New User" /></ProutectedRoute>}
              />
              <Route path="Edit/:userId" index element={<ProutectedRoute><Edit  /></ProutectedRoute>}/>
            </Route>
            <Route path="Parent">
              <Route index element={<ProutectedRoute><List  type={parentsColumns} /></ProutectedRoute>}/>
              <Route path="view/:userId" element={<ProutectedRoute><SinglePar role="Parent"  type={ChildrenColumns}/></ProutectedRoute>} />
              <Route
                path="new"
                element={<ProutectedRoute><New inputs={parentsInputs} title="Add New Parent" /></ProutectedRoute>}
              />
               <Route
                path="new/:id"
                element={<ProutectedRoute><NewChild inputs={ChildrenInputs} title="Add New children" /></ProutectedRoute>}
              />
            </Route>
            <Route path="Children">
              <Route index element={<ProutectedRoute><List  type={ChildrenColumns} /></ProutectedRoute>}/>
              <Route path="view/:userId" element={<ProutectedRoute><Single role="Children"/></ProutectedRoute>} />
              <Route
                path="new"
                element={<ProutectedRoute><New inputs={parentsInputs} title="Add New children" /></ProutectedRoute>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
