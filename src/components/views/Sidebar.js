import {React,useState} from 'react'
import { CloseRounded } from '@mui/icons-material';
import '../css/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from "@mui/icons-material/Home";
import { Button } from '@mui/material';
import img from "../../assets/lj2.png"
import { ContactMail } from '@mui/icons-material';
import firestore from "../../database/firebase"



function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState("");
    const [newuname, setNewUname] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const date = new Date();

    const formattedDate = date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });

    const handleAdd = async (e) => {
        // e.preventDefault();
        await firestore.collection("items").doc(newItem).set({ name: newItem, username: newuname, desc: newDesc, date: formattedDate });
        setNewItem("");
        setNewDesc("");
        setNewUname("")
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="sidebar">
           
            {/*Twitter icon */}
           <img style={{maxWidth:"20%", paddingLeft:"30px"}} src={img}/>
           
            
            {/*SIDEBAROPTION */}
    
            <SidebarOption active Icon={HomeIcon} text="Home" link="/"/>
      <SidebarOption Icon={ContactMail} text="Feedback" link="explore"/>
           
       {/*button -> tweet */}
       <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={openModal} >
                Tweet
            </Button>

     {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal__content">
                            <form className="modal__form">
                                {/* <label>
                                    UserName:<input type="text" value={newuname} onChange={(e) => setNewUname(e.target.value)} required/>
                                </label>
                                <label>
                                    Name:<input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} required/>
                                </label> */}
                                <label>
                                    Description:<input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} required/>
                                </label>
                                <button type="submit" onClick={handleAdd}>
                                    Add
                                </button>
                            </form>
                        </div>
                        <button className="close-button" onClick={closeModal}>
                            <CloseRounded/>
                        </button>
                    </div>
                </div>
            )}
 












            </div>



            
              
    


        
    )
}

export default Sidebar
