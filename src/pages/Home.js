import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Post from '../components/Post';


const callPosts = posts => {
  if (posts && posts.length > 0) {
    return posts.map(post => {
      return (
        <Link key={post.id} to={`/${post.id}`}>
          <Post post={post} />
        </Link>
      );
    })
  }
};

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/posts');
      const data = await response.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="Home">
      {callPosts(posts)}
    </div>
  );
}

export default Home;
