import React from 'react'

const BlogList = () => {
    let count = 1;
    console.log (count);
    const handleClick = () => {
        console.log(count ++);
    }
    return (
        <div>
            <h1>This is my Blog</h1>
            <p>I am so excited to do this.</p>
            <button onClick={handleClick}>Click me to increase count</button>
            <i>Going forward, you shall be receiving a <b>daily post</b> from me.</i>
        </div>
    )
}

export default BlogList
