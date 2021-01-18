import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div>
      <Link to="/clicker/">Clicker</Link>
      <Link to="/about/">About</Link>
    </div>
  );
};

export default Navigation;
