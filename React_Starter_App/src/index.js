import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

import Login from '../src/containers/Login';

// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<HomeContainer />, document.getElementById('root'));