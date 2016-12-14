import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//import 'material-design-lite/material.min.js';
//import 'material-design-lite/material.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './styles/styles.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './components/libs/main.css';
import './components/libs/custom.css';
import './components/libs/material.components.ext.min.css';
import './components/libs/material.components.ext.min.js';

 import injectTapEventPlugin from "react-tap-event-plugin";
 injectTapEventPlugin();

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);