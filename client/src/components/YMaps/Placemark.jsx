import React, { Component } from 'react';

import YMapsContext from './YMapsContext';

export default class Placemark extends Component {

  createPlacemark = (YMap) => {
    const {coords, ...rest} = this.props;
    const placemark = new ymaps.Placemark(coords, rest);

    YMap.geoObjects.add(placemark);
    return null;
  };

  render() {
    return <YMapsContext.Consumer>{this.createPlacemark}</YMapsContext.Consumer>;
  }
}