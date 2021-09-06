import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  Box,
} from '@material-ui/core';

export default function Post({ title, body, id }) {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Box p={2} my={1}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Box py={1}>{body}</Box>
        <Link style={{ color: 'black' }} to={`/post/${id}`}>
          Read more
        </Link>
      </Box>
    </Card>
  );
}
