import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import Icon from '@material-ui/core/Icon';

import './Photo.scss';

export default class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <Card className="photo__card">
          <CardContent className="photo__content">
            <img className="photo__img" src={this.props.src} />
          </CardContent>
          <CardActions className="photo__actions">
            <Icon>place</Icon>
            <Icon>person</Icon>
          </CardActions>
        </Card>
      </div>
    )
  }
}