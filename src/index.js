import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import { Provider } from "react-redux"
import configtureStore from "./store/index"
// import reportWebVitals from './reportWebVitals';
import 'lib-flexible'
import './styles/base.css'
import './styles/fontSize.css'
import 'antd-mobile/dist/antd-mobile.css';  

const store = configtureStore();

ReactDOM.render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
// reportWebVitals();
