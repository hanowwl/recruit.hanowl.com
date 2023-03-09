import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { globalStyle } from './styles';
import { Modal } from './components';
import { ENV } from './constant';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Global } from '@emotion/react';

const client = new ApolloClient({
  uri: ENV.SUPABASE_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Global styles={[globalStyle]} />
        <Modal.Container />

        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
