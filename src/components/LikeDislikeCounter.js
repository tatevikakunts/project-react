import React from "react";


export default ({id, like, dislike, likeHandle, dislikeHandle})=>{
    return (
        <div>
            <span>{like}</span>
            <button onClick={()=>likeHandle(id)}>Like</button>
            <span>{dislike}</span>
            <button onClick={()=>dislikeHandle(id)}>Dislike</button>


        </div>
    )
}