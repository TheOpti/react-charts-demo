import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './pages/Main';
import Dygraphs from './pages/Dygraphs';
import Echarts from './pages/Echarts';

import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="container mt-3 mb-3">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/dygraphs" component={Dygraphs} />
              <Route path="/echarts" component={Echarts} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
