
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = (theme) => ({
    paper: {
        maxWidth: 1200,
        margin: 'auto',
        overflow: 'hidden',

    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    newpost: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '90px 16px',
    },
});

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            body: null,
            data: [],
            resp: null
        };
    }
    changeTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    changeBody = (e) => {
        this.setState({
            body: e.target.value,
        });
    }
    addPost = (e) => {
        const url = "/posts"
        const data = {
            title: this.state.title,
            body: this.state.body
        }
        axios.post(url, data)
            .then((res) => {
                this.setState({
                    data: [],
                    resp: "Success: post added."
                });
            })
            .catch((err) => {
                this.setState({
                    data: [],
                    resp: "Error: failed to add post."
                });
            });
    }
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <PostAddIcon style={{ fontSize: 35 }} />
                </Avatar>
                <AppBar className={classes.searchBar} position="static"
                    color="default" >
                    <Toolbar>
                        <Grid container spacing={2} >
                            <Grid item xs>
                                <TextField
                                    onChange={this.changeTitle}
                                    fullWidth
                                    placeholder="Title"
                                    InputProps={{
                                        disableUnderline: true,
                                        className: classes.searchInput,
                                    }}
                                />
                                <Grid>
                                    <TextField
                                        multiline
                                        aria-label="minimum height"
                                        rows={6}
                                        onChange={this.changeBody}
                                        fullWidth
                                        placeholder="Text"
                                        InputProps={{
                                            disableUnderline: true,
                                            className: classes.searchInput,
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Button onClick={this.addPost} variant="contained" color="primary" className={classes.newpost}>
                                    Add New post
              </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <div><Button variant="contained" color="primary" className={classes.newpost}>
                        {this.state.resp ? this.state.resp : null}
                    </Button></div>

                </AppBar>

            </Paper>
        );
    }
}
NewPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPost);