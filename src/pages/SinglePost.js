import React, { useState, useEffect } from 'react';

import Post from '../components/Post';

const SinglePost = ({ match, history }) => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);

    // use for edit form
    const [description, setDescription] = useState('');

    const { id } = match.params;

    const fetchPost = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`);
        const data = await response.json();

        setPost(data);
        setDescription(data.description);
        setLoading(false);
        
    }

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        history.push('/');
    };

    const handleEditSubmit = async event => {
        event.preventDefault();

        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description
            })
        })

        const data = await response.json();

        fetchPost();

    }

    useEffect(() => {

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
                    <button onClick={() => setEdit(true)}>Edit</button>
                    {edit && (
                        <form onSubmit={handleEditSubmit}>
                            <input
                                value={description}
                                onChange={event => setDescription(event.target.value)}
                                placeholder='New description'
                             />
                            <button>Confirm</button>
                        </form>
                    )}
                </>
            )}
        </div>
    )
}

export default SinglePost;
