import React, {useEffect } from "react";
import {Typography, Container, AppBar, Grid} from '@material-ui/core';
import List from './components/List/List';
import Create from './components/Create/Create';
import useStyles from './styles';
import { getList } from './actions/list';
import { useDispatch } from 'react-redux';


const App = ()=> {

  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => { 
    dispatch(getList());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h4" align="center">Interview Portal</Typography>
      </AppBar>
      <Container>
        <Grid container alignItems="stretch" spacing={3}>
          <Grid xs={12}>
            <List/>
          </Grid>
          <Grid xs={12}>
            <Create/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
