import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { globalStyle } from './styles';
import { Modal, Toast } from './components';

import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={[globalStyle]} />
      <Modal.Container />
      <Toast />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
