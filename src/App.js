import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteComp from "./components/RouteComp";

const App = (props) => {
  return (
    <Router>
      <Navbar/>
      <RouteComp/>
    </Router>
  );
}

export default App;
