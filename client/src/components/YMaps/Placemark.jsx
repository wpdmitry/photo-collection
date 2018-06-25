import React, { Component } from 'react';

import YMapsContext from './YMapsContext';

export default class Placemark extends Component {

  createPlacemark = (YMap) => {
    const {coords, ...rest} = this.props;
    const placemark = new ymaps.Placemark(coords, rest);

    const myEvent = new Event('')

    const tick = () => {
      const coords = YMap.getCenter();
      console.log(coords);
      placemark.geometry.setCoordinates(coords);
    };

    // setInterval(tick, 0);
    // YMap.events.add('boundschange', (event) => {
    //   const coords = event.get('newCenter');
      
    // });

    YMap.geoObjects.add(placemark);
    return null;
  };

  render() {
    return <YMapsContext.Consumer>{this.createPlacemark}</YMapsContext.Consumer>;
  }
}