import Post from "./Post";
import React from 'react';


const PostList = props => {
    const { posts } = props;
    const listItems = posts.map((postItem) =>
        <Post post={postItem} />
    );
    return <div>{listItems}</div>
};


export default PostList;
