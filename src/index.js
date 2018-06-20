import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RepositoryLists from './containers/RepositoryLists';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RepositoryLists />, document.getElementById('root'));
registerServiceWorker();
