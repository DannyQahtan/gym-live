import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const InstagramCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink&access_token=YOUR_ACCESS_TOKEN');
        setPosts(response.data.data.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Carousel controls={false} indicators={false} interval={3000} pause={false}>
      {posts.map((post:any) => (
        <Carousel.Item key={post.id}>
          <img
            className="d-block w-100"
            src={post.media_url}
            alt={post.caption}
            style={{maxHeight: '300px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <p>{post.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default InstagramCarousel;
