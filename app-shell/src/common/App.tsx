import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

const Clicker = loadable(() => import('clicker/Clicker'));
const About = loadable(() => import('./About'));

export const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Navigation />
      <Switch>
        <Route path="/clicker/">
          <Clicker />
        </Route>
        <Route path="/about/">
          <About />
        </Route>
      </Switch>
    </div>
  );
};
