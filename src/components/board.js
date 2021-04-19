import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './Posts/Posts';
import { getPosts } from '../actions/posts';
import useStyles from '../styles';
import { Link } from 'react-router-dom';

const Board = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">View Notices</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Container>
      </Grow>
      <Container className={classes.link1} align="center">
        <Link className={classes.button} to="/">Back to Create Notice</Link>
      </Container>
    </Container>
  );
};

export default Board;