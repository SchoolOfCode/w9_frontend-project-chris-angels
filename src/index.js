import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('hi', process.env.REACT_APP_DOMAIN, process.env);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-rzy9j4q.eu.auth0.com"
      clientId="yZJVhm9dgRy5qRLJsH7Dv4SUaqqKxx0p"
      redirectUri={window.location.origin}
    >
      {' '}
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
