import React from 'react';
import './Post.css';


const Post = props => {
    const { post } = props;
    return <div class="post">
        <div class="xInBox1">&#9746;</div><div class="seder">
            <span id="fontSize16">{post.titel}{post.numOfBlog}</span>
            <br></br>
            <span>{post.start}<strong>{post.strong}</strong>{post.continue}<span class="red">{post.red}</span>
                {post.continue2}</span>
            <br></br>
            <span>{post.apter4bar}</span>
            <a href='link'><span>{post.link}</span></a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {post.after4bar}{post.numOfDays} {post.end}{post.name}
        </div></div>;
}

export default Post;
