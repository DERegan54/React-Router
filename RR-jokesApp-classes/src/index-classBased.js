import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App-classBased';
import registerServiceWorker from '/registerServiceWorker';

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();