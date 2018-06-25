import React, { Component } from 'react';

import {YMaps, Event, CenterLabelOfMap} from '../YMaps';

export default class Map extends Component {
  getCenter = (event) => {
    console.log('props', this.props);
    const {onSelectPlace} = this.props;
    const coords = event.get('newCenter');

    ymaps.geocode(coords)
      .then(result => {
        const geoObject = result.geoObjects.get(0);
        const addressName = geoObject.getAddressLine();

        console.log('полный адрес', addressName);
        onSelectPlace({coords, addressName});
      })
      .catch(console.log);
  }

  render() {
    const {height, width} = this.props;

    return (
      <div style={{height, width}}>
        <YMaps>
          <Event type="boundschange" handler={this.getCenter}/>
          <CenterLabelOfMap />
        </YMaps>
      </div>
    );
  }
}