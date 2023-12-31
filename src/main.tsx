import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '../styles.css';
import { App } from './components/app/app';
import { appStore } from './store/store';

ReactDOM.createRoot(document.querySelector('.container')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
