import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from './Form/Form';
import { getPosts } from '../actions/posts';
import useStyles from '../styles';
import { Link } from 'react-router-dom';

const Nortice = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Notice Board</Typography>
      </AppBar>
      <Grow in>
      <Container>
          <Grid align="center">
            <Grid item xs={12} sm={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Container className={classes.link} align="center">
        <Link className={classes.button} to="/board">Go to Notices</Link>
      </Container>
    </Container>
  );
};

export default Nortice;

