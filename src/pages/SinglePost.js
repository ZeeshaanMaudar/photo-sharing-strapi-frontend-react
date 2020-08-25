import React, { useState, useEffect } from 'react';

import Post from '../components/Post';

const SinglePost = ({ match }) => {
    const [post, setPost] = useState({});

    const { id } = match.params;

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:1337/posts/${id}`);
            const data = await response.json();

            console.log('data: ', data);
            setPost(data);
        }

        fetchPost();
    });

    return (
        <div className='SinglePost'>
            <Post post={post} />
        </div>
    )
}

export default SinglePost;
