import Right from "./Right";
import React from 'react';
//import './RightList.css';

import Grid from '@material-ui/core/Grid';

const RightList = props => {
    const { posts } = props;
    const listOfItems = posts.map((postItem) =>
        <Grid
            container
            direction="column"
        >
            <Right right={postItem} /></Grid>
    );
    return <div class="left">{listOfItems}</div>
};


export default RightList;
