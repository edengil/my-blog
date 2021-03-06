import './App.css';
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import NewPost from "./components/NewPost/NewPost";
import SeePost from "./components/SeePost/SeePost";
import AppBar from "./components/AppBar";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./sections/Login/Login";
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: green[500],
    },
  },
});

// constructor(props) {
//   super(props);
//   this.state = {
//       user: null,
//       pass: null,
//       data: [],
//       resp: null
//   };
// }




function App() {
  const [user, setUser] = useState({
    userLoggedIn: false,
    user: null,
    pass: null,
    data: [],
    resp: null
  });

  function setLogin(user) {
    setUser({
      userLoggedIn: true,
      user
    });
    console.log(user)
  }




  function setLogout() {
    console.log("LOGGED OUT")
    this.setState({
      userLoggedIn: false,
      user: null
    });
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <AppBar user={user} onLogOut={setLogout} />
          <header>
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/about">
                <AboutMe />
                {/* {user != null ? <AboutMe /> : <Login onSingIn={setLogin} onLogOut={setLogout} />} */}
              </Route>
              <Route path="/NewPost">
                <NewPost />
                {/* {user != null ? <NewPost /> : <Login onSingIn={setLogin} onLogOut={setLogout} />} */}
              </Route>
              <Route path="/Post">
                <SeePost />
              </Route>
              <Route path="/Login">
                {user.userLoggedIn === true ? <Redirect to="/Home" /> : <Login onSingIn={setLogin} />}
              </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </header>
        </div>
      </ThemeProvider>
    </Router >
  );
}


export default App;


