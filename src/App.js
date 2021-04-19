import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Board from './components/board';
import Nortice from './components/nortice';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Nortice} />
      <Route exact path="/board" component={Board} />
    </Switch> 
    </>
  );
}
 
export default App;

