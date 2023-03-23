import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h1>This is blog component !!</h1>
            <h2>{props.name} {props.author}</h2>
            <h2>{props.author}</h2>
        </div>
    );
};

export default Blog;