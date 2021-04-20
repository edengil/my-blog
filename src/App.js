import './App.css';
import PostList from './PostList';

const props = [
  {
    titel: "Blog post #",
    numOfBlog: "1",
    start: "My ",
    strong: "first blog post ",
    continue: "is all about me",
    red: " blog post",
    continue2: " and how to write a new post in my ",
    continue2andbar: "blog, you can find it ",
    link: "here",
    after4bar: "Published ",
    numOfDays: "1",
    end: "days ago by ",
    name: "Israel"
  },
  {
    titel: "Blog post #",
    numOfBlog: "2",
    start: "My",
    strong: " second blog post",
    continue: " is all about my blog post.",
    red: "",
    continue2: "",
    continue2andbar: "",
    link: "",
    after4bar: "Published ",
    numOfDays: "2",
    end: "days ago by ",
    name: "Joe"
  },
  {
    titel: "Blog post #",
    numOfBlog: "3",
    start: "My",
    strong: " third blog post",
    continue: " is all about my blog post.",
    red: "",
    continue2: "",
    continue2andbar: "",
    link: "",
    after4bar: "Published ",
    numOfDays: "3",
    end: "days ago by ",
    name: "Israel"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostList posts={props} />
      </header>
    </div>
  );
}

export default App;
