import React from "react";
import LikeDislikeCounter from "./LikeDislikeCounter";

export default ({id, user, title, body, like, dislike, likeHandle, dislikeHandle })=>{
    return (
        <div>
            <h3>{user}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <LikeDislikeCounter
            id ={id}
            like = {like}
            dislike={dislike}
            likeHandle={likeHandle}
            dislikeHandle={dislikeHandle}

            />
        </div>
    )
}