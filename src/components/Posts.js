import React from 'react';
import Post from './Post';
import { Container } from '@material-ui/core';

/* Returns all posts. Home page in Router, exact path="/" */
export default function Posts({ posts }) {
  return (
    <Container maxWidth="sm">
      {posts.map((el) => {
        return <Post title={el.title} body={el.body} id={el.id} />; 
      })}
    </Container>
  );
}
