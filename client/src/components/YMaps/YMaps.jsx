import React, { Component } from 'react';

import YMapsContext from './YMapsContext';

export default class Ymaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      YMap: null,
      size: null,
      mount: false,
    };

    this.map = React.createRef();
  }

  static defaultProps = {
    center: [55.76, 37.64],
    zoom: 8
  };

  componentDidMount() {
    console.log('mount');
    const script = document.createElement('script');
    script.onload = () => this.handleOnloadMap();
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    document.body.appendChild(script);
  }

  handleOnloadMap = () => {
    ymaps.ready(() => {
      const map = this.map.current;
      const {center, zoom} = this.props;

      map.innerHTML = '';

      const YMap = new ymaps.Map(map, {center, zoom});

      this.setState({
        YMap,
        size: map.getBoundingClientRect(),
        mount: true,
      })
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should?');
    console.log(this.props, this.state);
    console.log(nextProps, nextState);
    return !this.state.mount;
  }

  render() {
    const {children, preloader} = this.props;

    return (
      <YMapsContext.Provider value={this.state}>
        <div ref={this.map} style={{width: '100%', height: '100%'}}>
          {preloader ? preloader() : 'Загрузка карты...'}
        </div>
        {this.state.YMap && children}
      </YMapsContext.Provider>
    )
  }
}