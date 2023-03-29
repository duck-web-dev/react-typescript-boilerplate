import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

// Global styles
import 'css/globals.css';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
   		<App />
	</BrowserRouter>
);