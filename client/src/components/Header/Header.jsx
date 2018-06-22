import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';

import './Header.scss'

export default () => (
  <div className="header">
    <AppBar position="static" color="default">
      <Toolbar>
        <Icon>photo_camera</Icon>
        Photographer.inessa
      </Toolbar>
    </AppBar>
  </div>
)