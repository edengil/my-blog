import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBarNavigation from './AppBarNavigation';
import { Drawer } from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { useHistory } from "react-router";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));
// constructor(props) {
//     super(props);
//     this.state = {
//         resp: null
//     };
// };




function ButtonAppBar(props) {
    const classes = useStyles();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dologout = (e) => {
        const url = "/Logout";
        const data = {};
        axios.post(url, data);
        this.props.onLogOut()
    }

    let history = useHistory();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        open={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    >
                        <AppBarNavigation />
                    </Drawer>
                    <Typography variant="h6" className={classes.title}>
                        My Personal Blog
                    </Typography>
                    {props.user.userLoggedIn !== true ?
                        <Button color="inherit" onClick={() => history.push("/Login")} >Login<FingerprintIcon /></Button>
                        :
                        <Button color="inherit" onClick={dologout} >Logout<FingerprintIcon /></Button>
                    }



                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar;