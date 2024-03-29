import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screens/home/Home.jsx';
import './assets/styles/index.scss';
// import { RouteProvider } from 'react-router-dom';
import Router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
