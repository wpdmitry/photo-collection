import React, { Component, Fragment } from 'react';
import Photo from '../Photo/Photo';

import './Photos.scss';

export default class Photos extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/photos')
      .then(res => res.json())
      .then(photos => this.setState({photos}));
}

  render() {
    return (
      <div className="photos">
        {this.state.photos.map(({id, src}) => <div key={id} className="photos__photo"><Photo src={src}/></div>)}
      </div>
    )
  }
}