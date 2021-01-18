import React from 'react';
import { hydrate } from 'react-dom';
import { App } from '../common/App';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

loadableReady(() => {
  hydrate(app, document.getElementById('app'));
});
