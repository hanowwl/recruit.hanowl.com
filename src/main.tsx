import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { globalStyle } from './styles';

import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={[globalStyle]} />
    <App />
  </React.StrictMode>
);
