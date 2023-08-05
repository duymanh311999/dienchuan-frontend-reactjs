import React, { StrictMode }  from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';

import App from './containers/App';
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";

import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';
import { CartProvider } from "react-use-cart";

const renderApp = () => {
    ReactDOM.render(
        <StrictMode>
            <Provider store={reduxStore} >
                <IntlProviderWrapper>     
                     <CartProvider>
                        <App persistor={persistor}/> 
                     </CartProvider>                      
                </IntlProviderWrapper>
            </Provider>
        </StrictMode>,
        document.getElementById('root')
    );
};

renderApp();

