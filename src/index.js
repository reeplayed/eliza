import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ,
  </Provider>,
  document.getElementById('root')
);
