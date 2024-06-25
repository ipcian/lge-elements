import '@stoplight/elements-core/styles.css';

import { subscribeTheme } from '@stoplight/mosaic';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

subscribeTheme();
const REF: any = React.StrictMode

ReactDOM.render(
    <REF>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </REF>,
  document.getElementById('root'),
);
