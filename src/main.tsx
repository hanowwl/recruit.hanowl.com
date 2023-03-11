import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Global } from '@emotion/react';

import { App } from './App';
import { globalStyle } from './styles';
import { Modal, Toast } from './components';
import { ENV } from './constant';
import { supabase } from './supabase';

const httpLink = createHttpLink({ uri: `${ENV.SUPABASE_URL}/graphql/v1` });
const authLink = setContext(async (_, { headers }) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const token = session?.access_token;

  return {
    headers: {
      ...headers,
      apikey: ENV.SUPABASE_ANON_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Global styles={[globalStyle]} />
        <Modal.Container />
        <Toast />

        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
