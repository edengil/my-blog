
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from '@material-ui/icons/PostAdd';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';

const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
};

export default function AppBarNavigation(props) {

    return (
        <List>
            <ListItemLink href="/Home" key="home">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemLink>


            <ListItemLink href="/NewPost" key="newPost">
                <ListItemIcon>
                    <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="New Post" />
            </ListItemLink>

            <ListItemLink href="/Post" key="post">
                <ListItemIcon>
                    <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Post" />
            </ListItemLink>
            <ListItemLink href="/about" key="aboutMe">
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Me" />
            </ListItemLink>

        </List >
    );
}
