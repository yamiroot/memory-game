import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
} from 'react-router-dom';
import Router from './Router';
import './css/styles.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Router basename={process.env.PUBLIC_URL}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);


serviceWorker.unregister();
