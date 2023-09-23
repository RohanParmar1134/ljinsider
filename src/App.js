import React from "react";
import './App.css';
import Sidebar from "./components/views/Sidebar";
import Feed from "./components/views/Feed";
import Widgets from "./components/views/Widgets";

function App() {
  return (
    //BEM convention
    <div className="App">
       
     {/*Sidebar */}
       <Sidebar/>

       {/*Feed */}
       <Feed/>

        {/*Widgets*/}
        <Widgets/>
       </div>
  );
}

export default App;
