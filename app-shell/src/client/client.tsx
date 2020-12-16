import React from 'react';
import { hydrate } from 'react-dom';
import { App } from '../common/App';
import { loadableReady } from '@loadable/component';

loadableReady(() => {
  hydrate(<App />, document.getElementById('app'));
});
