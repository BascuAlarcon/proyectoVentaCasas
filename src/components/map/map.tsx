import React, { useLayoutEffect, useRef, useContext } from 'react';
import {Map, Marker} from 'mapbox-gl';  
import DB_JSON from '../../assets/texts/DB_Text.json' 
import 'mapbox-gl/dist/mapbox-gl.css';

const containerStyle = { 
    height: '100%',
    width: '100%' 
};  

export interface MapInterface{}

const MapboxMap: React.FC<MapInterface> = () => {  
    const mapDiv = useRef<HTMLDivElement>(null);
    const map = useRef<Map | null>(null);

    var lat = -33.075617;
    var lng = -71.417038; 
          
    useLayoutEffect(() => { 
        if (map.current) return ;
        map.current = new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: 15 , // starting zoom
        });   
        setMarkers(map.current);
    }, [])  
    
    const setMarkers = (map: Map) => { 
        const marker = new Marker({
            color: "red",
            anchor: "left",
            scale: 1.5
        })
        .setLngLat([lng, lat])
        .addTo(map) 
    }
   
    return <>  
        <div className="containerUbicacionMap"> 
            <div className='map-container' ref={mapDiv} style={containerStyle}></div>  
        </div>   
    </>
}

export default MapboxMap