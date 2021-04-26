import PostList from './PostList/PostList';
import RightList from './RightList/RightList';
import Grid from '@material-ui/core/Grid';
import React from "react";
import DOMPurify from 'dompurify'



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

        mainContent: '<span>My <strong>first blog post</strong> is all about me <span class="red">blog post</span> and how to write a new post in my <a href="link"><span>here</span></a>.</span>',
        after4bar: "Published ",
        numOfDays: "1",
        end: "days ago by ",
        name: "Israel"
    },
    {
        titel: "Blog post #",
        numOfBlog: "2",
        mainContent: '<span>My <strong>second blog post</strong> is all about my blog post.</span>',
        after4bar: "Published ",
        numOfDays: "2",
        end: "days ago by ",
        name: "Joe"
    },
    {
        titel: "Blog post #",
        numOfBlog: "3",
        mainContent: '<span>My <strong>third blog post</strong> is all about my blog post.</span>',
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
                <Grid container
                    spacing={5}
                    direction="row"
                >
                    <Grid item xs={10}>
                        <PostList posts={props} />

                    </Grid>
                    <Grid item xs={2}>
                        <RightList posts={right} />
                    </Grid>
                </Grid>


            </header>
        </div>
    );
}

export default Home;
