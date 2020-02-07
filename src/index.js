import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faRobot,
  faLongArrowAltRight,
  faLongArrowAltDown,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import './index.css';

import App from './App';

import history from './utils/history';

import * as serviceWorker from './serviceWorker';

// add all fontawesome solid icons to the library
library.add([faRobot, faLongArrowAltRight, faLongArrowAltDown, faHeart]);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
