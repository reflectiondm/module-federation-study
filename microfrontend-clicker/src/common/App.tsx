import React from 'react';
import loadable from '@loadable/component';

const Clicker = loadable(() => import('./Clicker'));

export const App: React.FC = () => {
  return (
    <div>
      <h1>Clicker app!</h1>
      <Clicker />
    </div>
  );
};
