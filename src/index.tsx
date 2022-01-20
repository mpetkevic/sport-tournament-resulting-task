import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './state';


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));
