import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/Redux/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <React.StrictMode>
    
      <BrowserRouter>
          <Provider store={store}>
            <Auth0Provider 
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            >
              <App />
            </Auth0Provider>
          </Provider>
        </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
