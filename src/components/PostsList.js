import React from "react";
import Post from "./Post";
export default ({posts, likeHandle, dislikeHandle})=>{
    return(
        <ul>
            {posts.map((p)=>(
                <li key ={p.id}>
                    <Post
                    id = {p.id}
                    user = {p.user}
                    title = {p.title}
                    body = {p.body}
                   like = {p.like}
                    dislike = {p.dislike}
                    likeHandle={likeHandle}
                    dislikeHandle={dislikeHandle}

                    />
                </li>
            ))}
        </ul>
    )
}