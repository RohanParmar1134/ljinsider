import React from "react";
import './App.css';
import Sidebar from "./components/views/Sidebar";
import Feed from "./components/views/Feed";
import Widgets from "./components/views/Widgets";
import Auth from "./components/views/Auth";

function App() {
  const auth = false
  if (auth){
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
  else{
    return(
      <Auth/>
    )
  }


  
}

export default App;
