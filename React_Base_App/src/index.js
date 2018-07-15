import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from '../src/containers/HomeContainer';
import MainContainer from '../src/containers/MainContainer'
import 'bootstrap/dist/css/bootstrap.css';
import  '../src/css/index.scss';

import Login from '../src/containers/Login';

// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<MainContainer />, document.getElementById('root'));