import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';

import mapboxgl from 'mapbox-gl'

 // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzY3VhbGFyY29uIiwiYSI6ImNsZXI4M25mZjB0bzYzcG52NzFwcmtmbWMifQ.MXM7eFMZIpRjX6654-cg4g';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 
);
 