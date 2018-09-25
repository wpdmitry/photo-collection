import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoadPhotos from './components/LoadPhotos/LoadPhotos';
import PhotosOnMap from './components/PhotosOnMap/PhotosOnMap';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/photos-on-map" component={PhotosOnMap} />
              <Route path="/download-photos" component={LoadPhotos} />
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    )
  }
}