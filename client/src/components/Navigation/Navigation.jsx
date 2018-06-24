import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <Link to="/">Главная</Link>
    <Link to="/download-photos">Загрузить фотографии</Link>
    {/*<Link to="/map">Map</Link>*/}
  </nav>
)