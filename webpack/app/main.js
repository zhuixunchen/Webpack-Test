//require('./style.css');

import './style.css';
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(
    <Greeter />,
    document.getElementById('root')
)

/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());*/
