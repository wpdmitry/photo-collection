import React, { Component } from 'react';

import YMapsContext from '../YMapsContext';

export default class CenterLabelOfMap extends Component {
    static defaultProps = {
        size: {
            width: 50,
            height: 50,
        }
    };

    stateControl = {};

    createCenterLabelOfMap = ({YMap, size: YMapSize}) => {
        const centerLabelSize = this.props.size;
        const centerLabelOptions = {
            float: 'none', 
            position: {
                top: 0.5 * YMapSize.height - centerLabelSize.height, 
                left: 0.5 * (YMapSize.width - centerLabelSize.width),
            }
        };
        const centerLabelTemplate = `
            <div style="width: {{data.width}}px; height: {{data.height}}px">
                <img src={{data.src}} width="100%" height="100%" />
            </div>
        `;

        const CenterLabel = new ymaps.control.Button({
            data: {
                src: "/map-marker-icon.png",
                ...centerLabelSize,
            },
            options: {
                layout: ymaps.templateLayoutFactory.createClass(centerLabelTemplate),
            }
        });

        YMap.controls.add(
            CenterLabel,
            centerLabelOptions,
        );

        this.stateControl = {
            YMap,
            CenterLabel,
        };

        return null;
    };

    componentWillUnmount() {
        const {YMap, CenterLabel} = this.stateControl;
        YMap.controls.remove(CenterLabel);
    }

    render() {
        return <YMapsContext.Consumer>{this.createCenterLabelOfMap}</YMapsContext.Consumer>
    }
};