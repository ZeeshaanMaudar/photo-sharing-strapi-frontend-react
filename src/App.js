import React from 'react';

import Post from './components/Post';

import './App.css';

const post = {
  "id": 1,
  "description": "Living on a prayer, because why not?",
  "likes": 20,
  "author": null,
  "created_by": {
    "id": 1,
    "firstname": "Zeeshaan",
    "lastname": "Maudarbocus",
    "username": null
  },
  "updated_by": {
    "id": 1,
    "firstname": "Zeeshaan",
    "lastname": "Maudarbocus",
    "username": null
  },
  "created_at": "2020-08-24T17:53:24.883Z",
  "updated_at": "2020-08-24T17:53:24.901Z",
  "image": {
    "id": 1,
    "name": "LivinOnAPrayer.jpg",
    "alternativeText": "",
    "caption": "",
    "width": 316,
    "height": 316,
    "formats": {
      "thumbnail": {
        "name": "thumbnail_LivinOnAPrayer.jpg",
        "hash": "thumbnail_Livin_On_A_Prayer_42296f8dca",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "width": 156,
        "height": 156,
        "size": 10.19,
        "path": null,
        "url": "/uploads/thumbnail_Livin_On_A_Prayer_42296f8dca.jpg"
      }
    },
    "hash": "Livin_On_A_Prayer_42296f8dca",
    "ext": ".jpg",
    "mime": "image/jpeg",
    "size": 37.42,
    "url": "/uploads/Livin_On_A_Prayer_42296f8dca.jpg",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "created_by": 1,
    "updated_by": 1,
    "created_at": "2020-08-24T17:53:09.234Z",
    "updated_at": "2020-08-24T17:53:09.266Z"
  }
};

const posts = [
  {
    id: 1,
    likes: 20,
    description: 'Living on a prayer, because why not?',
    image: {
      url: '/uploads/Livin_On_A_Prayer_42296f8dca.jpg'
    }
  },
  {
    id: 2,
    likes: 12,
    description: 'Gambling is **not** good for you...',
    image: {
      url: '/uploads/random_fe518783e0.jpeg'
    }
  },
];

const callPosts = posts => {
  if (posts && posts.length > 0) {
    return posts.map(post => {
      return <Post key={post.id} post={post} />;
    })
  }
};

const App = () => {
  return (
    <div className="App">
      {callPosts(posts)}
    </div>
  );
}

export default App;
