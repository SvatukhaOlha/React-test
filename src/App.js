import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          console.log('in res', res);
          return res.json();
        })
        .then((data) => {
          console.log('in then', data);
          setLoading(false);
          setPosts(data);
        })
        .catch((err) => {
          console.log('in error', err);
          setLoading(false);
          setError(err);
        });
    }
    getPosts();
  }, []);

  if (loading) {
    return <Alert severity="success">Loading...</Alert>;
  }

  if (error) {
    return (
      <Alert severity="error">{error} Oops! ... something went wrong</Alert>
    );
  }

  // Each PostPage component
  function PostPage(props) {
    const post = posts[props.match.params.id - 1];

    return (
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography color="textSecondary">Post №{post.id}!</Typography>
            <Typography variant="h4" component="h1">
              {post.title}
            </Typography>
            <Box py={1}>{post.body}</Box>
            <Link style={{ color: 'black' }} to="/">
              Back
            </Link>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts posts={posts} />
        </Route>
        <Route path="/post/:id" component={PostPage} /> /* Router to each post
        by id */
      </Switch>
    </Router>
  );
}

export default App;
