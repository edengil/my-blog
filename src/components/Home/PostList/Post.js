import React from 'react';
import './Post.css';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';


const Post = props => {
    const { post } = props;
    return <div class="post"><Grid
        container
        direction="row"
    >
        <Grid item xs={11}>
            <div><Grid
                container
                direction="column"
            ><Grid>
                    <span class="fontSize16"><h2>{post.title}</h2></span></Grid>
                <br></br><Grid>
                    <div className="content" dangerouslySetInnerHTML={{ __html: post.body }}></div>
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <br></br><Grid justify="flex-end"
                >
                    <span>Published 1 days ago by Israel</span>
                </Grid></Grid>
            </div>
        </Grid>
        <Grid
            item xs spacing={1}
            container justify="flex-end"
            alignItems="flex-start"
        >
            <div><CancelIcon color="error" style={{ fontSize: 45 }} />
            </div>
        </Grid>
    </Grid>
    </div>;
}

export default Post;
