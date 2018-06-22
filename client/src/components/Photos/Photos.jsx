import React, { Component, Fragment } from 'react';
import Photo from '../Photo/Photo';

import './Photos.scss';

export default class Photos extends Component {
  render() {
    return (
      <div className="photos">
        {[0, 1, 2, 3, 4, 5].map((_, index) => <div key={index} className="photos__photo"><Photo /></div>)}
      </div>
    )
  }
}