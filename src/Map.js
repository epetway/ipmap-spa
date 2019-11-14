import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import Loader from './Loader.js';

class IPMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ipcoords: null,
      loading: true,
    }
  }

  componentDidMount() {
    fetch('https://ipmap.herokuapp.com/ipcoords')
      .then(response => response.json())
      .then(ipcoords => this.setState({
        ipcoords: ipcoords,
        loading: false
      }));
  }

  render() {
    if ( this.state.loading ) {
      return <Loader />;
    }
    return (
      <LeafletMap
        style={{height: "100vh"}}
        center={[35.7721, -78.6386]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <HeatMapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={this.state.ipcoords}
          longitudeExtractor={m => m[1]}
          latitudeExtractor={m => m[0]}
          intensityExtractor={m => parseFloat(m[2])}
        />
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}

export default IPMap;