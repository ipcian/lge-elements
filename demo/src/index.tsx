import '@stoplight/elements-core/styles.css';

import { subscribeTheme } from '@stoplight/mosaic';
import React from 'react';
import ReactDOM from 'react-dom';
import ElementsAPI from "./components/ElementsAPI";
// import { BrowserRouter } from 'react-router-dom';

// import { App } from './App';

subscribeTheme();


// const REF: any = React.StrictMode

// const DEMO = <REF>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// </REF>;

ReactDOM.render(
  <ElementsAPI />,
  document.getElementById('root'),
);
