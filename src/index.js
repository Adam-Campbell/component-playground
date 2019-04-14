//import 'react-app-polyfill/ie11';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ShortlistContextProvider } from './components/ShortlistContext';
import { ResultsContextProvider } from './components/ResultsContext';

ReactDOM.render(
    <ResultsContextProvider>
        <ShortlistContextProvider>
            <App />
        </ShortlistContextProvider>
    </ResultsContextProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
