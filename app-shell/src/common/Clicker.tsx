import React, { useState } from 'react';

const Clicker: React.FC = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);
  return (
    <div>
      <div>You have clicked the button {count} times</div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default Clicker;
