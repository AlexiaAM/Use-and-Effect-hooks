import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);
  const [contar, setContar] = useState(2);

  return (
    <div>
      <h2>Example Use</h2>
      <p>You clicked {count} times</p>
      <p>Your current even number is {contar}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setContar(contar + 2)}>
        Next Even number
      </button>
    </div>
  );
}

export default Example;