import React from 'react'
import '../css/Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search"
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button } from '@mui/material';
// import { Button } from '@mui/base';
import img from "../../assets/lj2.png"




function Sidebar() {
    return (
        <div className="sidebar">
           
            {/*Twitter icon */}
           <img style={{maxWidth:"20%", paddingLeft:"30px"}} src={img}/>
           
            
            {/*SIDEBAROPTION */}
    
            <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={ NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
           
       {/*button -> tweet */}
       <Button variant="contained" className="sidebar__tweet" fullWidth>
           Tweet
         </Button>
 












            </div>



            
              
    


        
    )
}

export default Sidebar
