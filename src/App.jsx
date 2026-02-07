import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routing from "../Routing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
     <Header/>
     <Routing/>
     <Footer/>

    </div>
  );
};

export default App;
