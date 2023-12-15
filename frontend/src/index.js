import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Productscontext from './Components/contexts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Productscontext>
      <BrowserRouter>
   <App />
   
  </BrowserRouter>
   </Productscontext>
);


