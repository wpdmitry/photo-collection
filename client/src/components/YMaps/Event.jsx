import React, { Component } from 'react';

import YMapsContext from './YMapsContext';

export default class Event extends Component {
    stateEvent = {};

    createEvent = ({YMap}) => {
        const {type, handler} = this.props;
        YMap.events.add(type, handler);

        this.stateEvent = {
            YMap,
            type, 
            handler,
        };

        return null;
    }

    componentWillUnmount() {
        const {YMap, type, handler} = this.stateEvent;
        YMap.events.remove(type, handler);
    }

    render() {
        return <YMapsContext.Consumer>{this.createEvent}</YMapsContext.Consumer>
    }
}