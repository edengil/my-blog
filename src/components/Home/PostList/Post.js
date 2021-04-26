import React from 'react';
import './Post.css';
import Grid from '@material-ui/core/Grid';
import DOMPurify from 'dompurify'
import CancelIcon from '@material-ui/icons/Cancel';


const Post = props => {
    const { post } = props;
    return <div class="post"><Grid
        container
        direction="row"
    >
        <Grid item xs={11}>
            <div>
                <span class="fontSize16">{post.titel}{post.numOfBlog}</span>
                <br></br>
                <div className="content" dangerouslySetInnerHTML={{ __html: post.mainContent }}></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {post.after4bar}{post.numOfDays} {post.end}{post.name}
            </div>
        </Grid>
        <Grid
            item xs spacing={1}
            container justify="flex-end"
            alignItems="flex-start"
        >
            <div><CancelIcon color="error" fontSize="large" />
            </div>
        </Grid>
    </Grid>
    </div>;
}

export default Post;
