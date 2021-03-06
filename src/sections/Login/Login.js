import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.palette.primary.main,
    },
});

class Login extends React.Component {
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

    doLogin = (e) => {
        const url = "/Login";
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
                        <FingerprintIcon style={{ fontSize: 35 }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                </Typography>

                    <form className={classes.form} noValidate>
                        <TextField
                            onChange={this.changeUsername}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username / Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={this.changePassword}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            onClick={this.doLogin}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Login
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/SignUp" variant="body2">

                                    Don't have an account? Sign Up
                            </Link>
                            </Grid>

                        </Grid>
                    </form>

                </div>
                <div><h1>
                    {this.state.resp ? this.state.resp : null}
                </h1></div>
            </Container>
        );
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useProps)(Login);