import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store/index';

var MessengerPlugin = require("react-messenger-plugin");

ReactDOM.render(
  
  <Provider store={store}>      
    <App>
    <MessengerPlugin
  appId="825826504691044"
  pageId="100908308854613"
/>,
      </App>
  </Provider>,  
   document.getElementById('root'));
