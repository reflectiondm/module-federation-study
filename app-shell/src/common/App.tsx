import React, { useState } from 'react';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);

  return (
    <div>
      <h1>Hello world!</h1>
      <div>You've clicked the button {count} times</div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};
