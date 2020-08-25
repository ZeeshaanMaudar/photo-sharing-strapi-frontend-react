import React, { useState, useEffect } from 'react';

import Post from '../components/Post';

const SinglePost = ({ match }) => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = match.params;

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:1337/posts/${id}`);
            const data = await response.json();

            setPost(data);
            setLoading(false);
            
        }

        fetchPost();
    }, []);

    return (
        <div className='SinglePost'>
            {loading && (
                <p>Loading...</p>
            )}
            {!loading && (
                <Post post={post} />
            )}
        </div>
    )
}

export default SinglePost;
