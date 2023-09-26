import React from 'react'
import "../css/Widgets.css";
import SearchIcon from"@mui/icons-material/Search";
import firestore from '../../database/firebase';
import {auth} from "../../database/firebase"
import {useAuthState} from 'react-firebase-hooks/auth';

function Widgets() {
    const [user] = useAuthState(auth);
    // const username = 
    return (
        <div className="widgets">
         <div className="widgets__input">
             <SearchIcon className="widgets__searchIcon"/>
             <input placeholder="Search Twitter" type="text"/>
        </div> 
        <div className="widgets__widgetContainer">
        <h1>
            Welcome! {user.displayName}
            </h1>
         </div>
        </div>
    )
}

export default Widgets;