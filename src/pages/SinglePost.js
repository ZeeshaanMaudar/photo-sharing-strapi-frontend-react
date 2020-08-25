import React, { useState, useEffect } from 'react';

import Post from '../components/Post';

const SinglePost = ({ match, history }) => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = match.params;

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        history.push('/');
    };

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
                <>
                    <Post post={post} />
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    )
}

export default SinglePost;
