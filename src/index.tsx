import React from 'react';
import reactDom from 'react-dom';
import { CacheProvider } from 'rest-hooks';
import { App } from './components/App';

reactDom.render(<CacheProvider><App /></CacheProvider>, document.getElementById('root'));
