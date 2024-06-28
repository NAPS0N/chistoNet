import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { ShopType } from '../../../pages/Shop/ShopType';


function MapYandex({shop}:{shop: ShopType}): JSX.Element {
    return (
        <div className='map'>
        <YMaps>
  <Map defaultState={{ center: [+`${shop.lax}`, +`${shop.lon}`], zoom: 12, }} width = {900} height = {400}>
    <Placemark defaultGeometry={[+`${shop.lax}`, +`${shop.lon}`]} />
  </Map>
</YMaps>;
    </div>
    );
}

export default MapYandex;