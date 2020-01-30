/* --- libs ---*/
import React from 'react';
import ReactDOM from 'react-dom';

/* --- styles ---*/
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './assets/styles/main.css';

/* --- components ---*/
import App from './App';

/* --- service worker ---*/
import * as serviceWorker from './serviceWorker';

// add all fontawesome solid icons to the library
library.add(fas);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
