import { Avatar } from '@mui/material';
import React from 'react'
import "../css/Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutLineIcon from "@mui/icons-material/ChatBubbleOutline"
import ReapeatIcon from "@mui/icons-material/Repeat"
import FavouriteIcon from "@mui/icons-material/FavoriteBorder"
import PublishIcon from "@mui/icons-material/Publish"

function Post({
  displayName,
  username,
  verified,
  text,
  timestamp,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <img src={avatar} className="img" alt=''/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              @{displayName}{" "}
              <span className="post_headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <div className="post__date">
            <p>{timestamp}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <button style={{backgroundColor:"teal"}}>
          <ChatBubbleOutLineIcon fontSize="small"/>
          </button>
          <button style={{backgroundColor:"teal"}}>
          <FavouriteIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post