import React from "react";
import { BrowserRouter  , Switch, Route  } from "react-router-dom";
// import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import  Navbar  from "./components/Navbar/Navbar";
import About from "./pages/About/About"
import Doctors from "./pages/Doctors/Doctors";
const App = ()=>{
  return(
    <BrowserRouter>
    <Switch>
      
      <Route path = "/"  exact component = {Home}  /> 
      {/* <Route path = "/login" exact component = {Login} ></Route> */}
      <Route path = "/nav" exact component = {Navbar}></Route>
      <Route path="/doctors" exact component = {Doctors}></Route>
      <Route path = "/about" exact component = {About}></Route>
    </Switch>

    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App;