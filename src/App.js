import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopPage from './Component/TopPage';
import SecoundPage from './Component/SecoundPage';

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={TopPage}></Route>
          <Route exact path='/secoundpage' component={SecoundPage}></Route>
        </Switch>
      </Router>
    </div >
  )
}

export default App
