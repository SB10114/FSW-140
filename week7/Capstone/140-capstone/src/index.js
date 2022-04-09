import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from "./Components/App2"
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>,
  document.getElementById('root')
);

