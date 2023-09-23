import React from 'react'
import "../css/Widgets.css";
import SearchIcon from"@mui/icons-material/Search";


function Widgets() {
    return (
        <div className="widgets">
         <div className="widgets__input">
             <SearchIcon className="widgets__searchIcon"/>
             <input placeholder="Search Twitter" type="text"/>
        </div> 
        <div className="widgets__widgetContainer">
         <h3>What's Happening</h3>
         </div>
        </div>
    )
}

export default Widgets;