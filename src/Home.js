import PostList from './PostList';
import RightList from './RightList';

const right = [
    {
        titel: "Popular",
        first_blog: "3",
        second_blog: "1",
        third_blog: "2",
        link_of_first: "go to page",
        link_of_second: "go to page",
        link_of_third: "go to page",
    },
    {
        titel: "Lastest",
        first_blog: "1",
        second_blog: "2",
        third_blog: "3",
        link_of_first: "go to page",
        link_of_second: "go to page",
        link_of_third: "go to page"
    }
]

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

function Home() {
    return (
        <div>
            <header>
                <h1>This is my blog</h1>
                <RightList posts={right} />
                <PostList posts={props} />

            </header>
        </div>
    );
}

export default Home;
