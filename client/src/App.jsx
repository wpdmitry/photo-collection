import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/Home/Home';
import Header from './components/Header/Header';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    )
  }
}