import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';



const useProps = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            pass: null,
            data: [],
            resp: null
        };
    }
    changeUsername = (e) => {
        this.setState({
            user: e.target.value,
        });
    }

    changePassword = (e) => {
        this.setState({
            pass: e.target.value,
        });
    }

    doSignUp = (e) => {
        const url = "/SignUp";
        const data = {
            user: this.state.user,
            pass: this.state.pass
        }
        axios.post(url, data)
            .then((res) => {
                this.setState({
                    data: [],
                    resp: "Success: user logged in."
                });
            })
            .catch((err) => {
                this.setState({
                    data: [],
                    resp: "Error: failed to login user."
                });
            });
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
        </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    onChange={this.changeUsername}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="User Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.changePassword}

                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={this.doSignUp}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            href="/Login"
                            className={classes.submit}
                        >
                            Sign Up
          </Button>

                        <div><h1>
                            {this.state.resp ? this.state.resp : null}
                        </h1></div>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/Login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useProps)(SignUp);