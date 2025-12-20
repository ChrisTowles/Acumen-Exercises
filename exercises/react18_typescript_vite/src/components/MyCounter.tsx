import { useState } from 'react';

function MyCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button>Click me to increase counter:</button>
      <br />
      <br />
      <h2>Count: {count}</h2>
    </div>
  );
}

export default MyCounter;
