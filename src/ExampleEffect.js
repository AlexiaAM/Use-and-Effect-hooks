import React, { useEffect, useState } from 'react';

function ExampleEffect() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(10);
  const [numero, setNumero] = useState(0);

    useEffect (()=> {
        setNumero(count*2);
    },[count]);

  return (
    <div>
      <h2>Example Effect</h2>
      <p>You clicked {count} times</p>
      <p>Mi numero *2 =  {numero}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleEffect;