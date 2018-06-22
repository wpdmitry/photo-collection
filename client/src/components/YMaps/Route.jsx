import React from 'react';

import YMapsContext from './YMapsContext';

export default ({path, ...rest}) => {

  const createRoute = (YMap) => {
    ymaps.route(path, rest)
      .then(
        route => YMap.geoObjects.add(route),
        error => alert('Возникла ошибка: ' + error.message)
      );

    return null;
  };

  return <YMapsContext.Consumer>{createRoute}</YMapsContext.Consumer>;
}