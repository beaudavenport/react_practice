import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let host = 'localhost';
let apiName = 'pizzaapisite';

export default {
  getToppings: () => {
    return axios.get(`${host}/${apiName}/toppings`);
  }
}
