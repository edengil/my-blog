


import PostList from './PostList/PostList';
import RightList from './RightList/RightList';
import Grid from '@material-ui/core/Grid';
import React from "react";
import axios from 'axios';



export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            reps: null
        };
    }


    right = [
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

    gelAllPosts = () => {
        const url = "/posts";
        axios.get(url).then((res) => {
            console.log(res.data);
            this.setState({
                postData: res.data,
                reps: null
            });

        });
    }
    componentDidMount() {
        this.gelAllPosts();
    }

    render() {
        const data = this.state.postData
        console.log(data)
        return (
            <div>
                <header>
                    <h1>This is my blog</h1>
                    <Grid container
                        spacing={5}
                        direction="row"
                    >
                        <Grid item xs={10}>
                            <PostList posts={data} />
                        </Grid>
                        <Grid item xs={2}>
                            <RightList posts={this.right} />
                        </Grid>
                    </Grid>
                </header>
            </div>
        );
    }
}