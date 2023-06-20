import React, { useLayoutEffect, useRef, useState } from 'react';
import {Map, Marker} from 'mapbox-gl';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDirections } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

const containerStyle = { 
  height: '100%',
  width: '100%' 
}; 
  
const markersSushi = [{
    name: "Center",
    lat: -35.424202,
    lng: -71.654126
} ] 

export interface MapInterface{}

const MapboxMap: React.FC<MapInterface> = () => {

    const mapDiv = useRef<HTMLDivElement>(null);
    const map = useRef<Map | null>(null);
 
    useLayoutEffect(() => {
        if (map.current) return ;
        map.current = new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [markersSushi[0].lng, markersSushi[0].lat], // starting position [lng, lat]
            zoom: 15, // starting zoom
        });
        setMarkers(map.current)  
    }, [])  

    const setMarkers = (map: Map) => {
        const eastMarker = new Marker({
            color: "#CC2936"
        }).setLngLat([markersSushi[0].lng, markersSushi[0].lat]).addTo(map) 
    }
      
    return <> 
        <div className="containerUbicacionMap"> 
            <div className='map-container' ref={mapDiv} style={containerStyle}></div>  
        </div>   
    </>
}

export default MapboxMap