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
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post_headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
                @{username}
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
          <ChatBubbleOutLineIcon fontSize="small" />
          <ReapeatIcon fontSize="small" />
          <FavouriteIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post