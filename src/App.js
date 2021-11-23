import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteComp from "./components/RouteComp";
import { useDispatch } from "react-redux";
import { startUserAllDetails } from "./actions/userActions";

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token) {
      dispatch(startUserAllDetails(token))
    }
  }, [])

  return (
    <Router>
      <Navbar/>
      <RouteComp/>
    </Router>
  );
}

export default App;
