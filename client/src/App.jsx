import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoadPhotosForm from './components/LoadPhotosForm/LoadPhotosForm';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/download-photos" component={LoadPhotosForm}/>
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    )
  }
}