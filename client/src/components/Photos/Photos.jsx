import React, { Component, Fragment } from 'react';
import Photo from '../Photo/Photo';

import './Photos.scss';

export default class Photos extends Component {
  state = {
    collections: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/photos')
      .then(res => res.json())
      .then(result => this.setState({collections: result.data}));
  }

  render() {
    const {collections} = this.state;
    let photos = [];
    collections.forEach((c) => {
      photos = photos.concat(c.photos.map((photo) => ({
        place: c.place,
        title: c.title,
        ...photo,
      })));
    });
    console.log(photos);
    return (
      <div className="photos">
        {photos.map(({id, src}) => <div key={id} className="photos__photo"><Photo src={src}/></div>)}
      </div>
    )
  }
}