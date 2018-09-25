import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {YMaps, Placemark} from '../YMaps';
import {getPhotos} from '../../actions';

class PhotosOnMap extends Component {    
    componentDidMount() {
        if (this.props.collections.length === 0) {
            this.props.getPhotos();
            }
    }

    render() {
        const {collections} = this.props;
        return (
            <div style={{height: 700, width: 700}}>
                <YMaps>
                    {collections.map(c => <Placemark key={c.collectionId} coords={c.place} />)}
                </YMaps>
            </div>
        )
    }
}

export default connect(
    state => ({
        collections: state,
    }),
    dispatch => ({
        getPhotos: () => dispatch(getPhotos())
    })
)(PhotosOnMap);