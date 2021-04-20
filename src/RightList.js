import Right from "./Right";
import React from 'react';


const RightList = props => {
    const { posts } = props;
    const listItems = posts.map((postItem) =>
        <Right post={postItem} />
    );
    return <div>{listItems}</div>
};


export default RightList;
