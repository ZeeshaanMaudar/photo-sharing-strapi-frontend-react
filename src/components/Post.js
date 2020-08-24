import React from 'react';

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

const API_URL = 'http://localhost:1337';

const formatImageUrl = url => `${API_URL}${url}`;

const Post = () => {
    const url = post.image && post.image.url;
    const description = post.description;
    const likes = post.likes;

    return (
        <div className='Post'>
            <img className='Post__Image' src={formatImageUrl(url)}/>
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>
    );
};

export default Post;
