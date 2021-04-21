import Right from "./Right";
import React from 'react';
import './RightList.css';


const RightList = props => {
    const { posts } = props;
    const listOfItems = posts.map((postItem) =>
        <Right right={postItem} />
    );
    return <div class="left">{listOfItems}</div>
};


export default RightList;
