import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/map">Map</Link>
  </nav>
)