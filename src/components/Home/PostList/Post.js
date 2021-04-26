import React from 'react';
import './Post.css';
import Grid from '@material-ui/core/Grid';
import DOMPurify from 'dompurify'



const Post = props => {
    const { post } = props;
    return <div class="post">
        <div class="xInBox1">&#9746;</div><div>
            <span class="fontSize16">{post.titel}{post.numOfBlog}</span>
            <br></br>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.mainContent }}></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {post.after4bar}{post.numOfDays} {post.end}{post.name}
        </div></div>;
}

export default Post;
