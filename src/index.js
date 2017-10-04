import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mine from './Mine';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mine />, document.getElementById('root'));
registerServiceWorker();
