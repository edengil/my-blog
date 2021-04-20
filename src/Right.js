import './Right.css';
import React from 'react';



const Right = props => {
    const { right } = props;
    return <div class="toTheRight">
        <h1>{right.titel1}</h1>
        <span id="blog3">Blog post #{right.first_blog} <a href='link'>{right.link_of_first1}</a></span>
        <br></br>
        <span id="blog1">Blog post #{right.second_blog} <a href='link'>{right.link_of_second2}</a></span>
        <br></br>
        <span id="blog2">Blog post #{right.third_blog} <a href='link'>{right.link_of_third3}</a></span>
        <br></br><hr></hr>
    </div>

};

export default Right;