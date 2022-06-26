import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './global.css';
import Home from './pages/home';
import Details from './pages/details';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

 pode ser assim também: */

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details:id' element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


