import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './components/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
