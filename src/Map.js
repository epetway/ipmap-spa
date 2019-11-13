import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import HeatMapLayer from 'react-leaflet-heatmap-layer';
import { ipcoords } from './ipcoords.js';

class IPMap extends React.Component {
  render() {
    return (
      <LeafletMap
        style={{height: "100vh"}}
        center={[50, 10]}
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
          points={ipcoords}
          longitudeExtractor={m => m[1]}
          latitudeExtractor={m => m[0]}
          intensityExtractor={m => parseFloat(m[2])} />
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}

export default IPMap;