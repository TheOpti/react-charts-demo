import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Main from './pages/Main';
import Dygraphs from './pages/Dygraphs';

import Header from './components/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <div className="container">
                <Route path="/main" component={Main} />
                <Route path="/dygraphs" component={Dygraphs} />
              </div>
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
