import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import './Header.scss'

export default () => (
  <div className="header">
    <AppBar position="static" color="default">
      <Toolbar style={{justifyContent: 'space-between'}}>
        <Link to="/" style={{textDecoration: 'none'}}>
          <Button>
            <Icon style={{marginRight: 5}}>photo_camera</Icon>
            Photographer.inessa
          </Button>
        </Link>
        <Link to="/download-photos" style={{textDecoration: 'none'}}>
          <Button>Загрузить фото</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
)