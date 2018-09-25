import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Photo from '../Photo/Photo';
import {addCollection, getPhotos} from '../../actions';
import {photosSelector} from '../../selectors';

import './Photos.scss';

class Photos extends Component {
  componentDidMount() {
    if (this.props.photos.length === 0) {
      this.props.getPhotos();
    }
  }

  render() {
    const {photos} = this.props;

    return (
      <div className="photos">
        {photos.length === 0 && <h4>Загрузка...</h4>}
        {photos.map(({id, src}) => <div key={id} className="photos__photo"><Photo src={src}/></div>)}
      </div>
    )
  }
}

export default connect(
  state => ({
    photos: photosSelector(state),
  }),
  dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
  })
)(Photos);
