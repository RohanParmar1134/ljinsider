import { Avatar,Button } from '@mui/material';
import {React,useState} from 'react'
import "../css/Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutLineIcon from "@mui/icons-material/ChatBubbleOutline"
import ReapeatIcon from "@mui/icons-material/Repeat"
import FavouriteIcon from "@mui/icons-material/FavoriteBorder"
import PublishIcon from "@mui/icons-material/Publish"
import firestore from '../../database/firebase';
function Post({
  uid,
  displayName,
  username,
  verified,
  text,
  timestamp,
  image,
  avatar,
  like,
  likestatus,
  comment,
  time
}) {
  const [items, setItems] = useState([]);
  const makelike=async()=>{
    await firestore.collection("confess").doc(uid).update({like:like+1,likestatus:true}).then(async()=>{
      
    })
  }
  const unlike=async()=>{
    await firestore.collection("confess").doc(uid).update({like:like-1,likestatus:false})
  }
  return (
    <div className="post">
      <div className="post__avatar">
        <img src={avatar} className="img" alt=''/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              @{displayName}
              <span className="post_headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p style={{fontSize:"18px"}}>{text}</p>
          </div>
          <div className="post__date">
            <p>{timestamp}</p>
          </div>
        </div>
        <div className="post__footer">
          <Button style={{color:"white"}}>
          <ChatBubbleOutLineIcon fontSize="small"/>
          </Button> 
          {
            likestatus==true ? 
            <Button style={{color:"red"}} onClick={unlike}>
            <FavouriteIcon fontSize="small" backgroundColor="white" />     {like}
            </Button> : 
            <Button style={{color:"white"}} onClick={makelike} >
          <FavouriteIcon fontSize="small" />  {like}
          </Button>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Post