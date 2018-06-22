import React from 'react';

import {YMaps, Placemark, Route as YRoute} from '../YMaps';

export default () => (
  <div style={{width: 600, height: 600}}>
    <YMaps center={[55.76, 37.64]} zoom={7}>
      <Placemark coords={[55.76, 37.64]} hintContent="Москва!" balloonContent="Столица России"/>
      <Placemark coords={[56.76, 37.64]}/>
      <Placemark coords={[56.76, 36.64]}/>
      <YRoute path={[[54.76, 37.64], [56.76, 37.64]]}/>
    </YMaps>
  </div>
)