import './App.css';
import Home from "./Home";
import AboutMe from "./AboutMe"
import NewPost from "./NewPost"
import SeePost from "./SeePost"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: green[500],
//     },
//     secondary: {
//       main: "#76ff03",
//     },
//   },
// });


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/NewPost">New Post</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/Post">Post</Link>

          </ul>
        </nav>
        <header>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/NewPost">
              <NewPost />
            </Route>
            <Route path="/Post">
              <SeePost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router >
  );
}


export default App;
