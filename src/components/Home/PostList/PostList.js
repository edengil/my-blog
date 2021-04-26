import Post from "./Post";
import React from 'react';
import Grid from '@material-ui/core/Grid';


const PostList = props => {
    const { posts } = props;
    const listItems = posts.map((postItem) =>
        <Grid

            container
            item xs={12}
            direction="column"
            justify="flex-start"
            alignItems="stretch">
            <Post post={postItem} />
        </Grid>
    );
    return <div>{listItems}</div>
};


export default PostList;
