import './Right.css';
import React from 'react';



const Right = props => {
    const { right } = props;
    return <div class="toTheRight"><div class="rel">
        <h1>{right.titel}</h1>
        <span>Blog post #{right.first_blog} <a href='link'>{right.link_of_first}</a></span>
        <br></br>
        <span>Blog post #{right.second_blog} <a href='link'>{right.link_of_second}</a></span>
        <br></br>
        <span>Blog post #{right.third_blog} <a href='link'>{right.link_of_third}</a></span>
        <br></br>
        <hr></hr>
    </div></div>

};

export default Right;