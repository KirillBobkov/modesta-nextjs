import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
const geo = [55.44711106925449, 65.35028099999987];

const defaultState = {
  center: geo,
  zoom: 16,
};

export default React.memo(() => {
  return (
    <YMaps key={1}>
      <Map key={2} width="100%" defaultState={defaultState}>
        <Placemark key={3} geometry={geo} />
      </Map>
    </YMaps>
  );
});
