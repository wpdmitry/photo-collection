import React, { Component, Fragment } from 'react';

import Form from '../Form/Form';
import Map from '../Map/Map';

export default class LoadPhotos extends Component {
    state = {
        place: null,
    }

    onSelectPlace = (place) => {
        this.setState({place});
    };

    render() {
        return (
            <Fragment>
                <Form place={this.state.place} />
                <Map 
                    height={500}
                    width={500}
                    onSelectPlace={this.onSelectPlace}
                />
            </Fragment>
        )
    }
}