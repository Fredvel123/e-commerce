import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from './App.jsx';
// style
import './index.css';
// redux
import { store } from './redux-toolkit/store/index.jsx';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

