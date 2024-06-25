import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapYandex(): JSX.Element {
    return (
        <div className='map'>
        <YMaps>
  <Map defaultState={{ center: [55.751574, 37.573856], zoom: 12, }} width = {900} height = {400}>
    <Placemark defaultGeometry={[55.751574, 37.573856]} />
  </Map>
</YMaps>;
    </div>
    );
}

export default MapYandex;