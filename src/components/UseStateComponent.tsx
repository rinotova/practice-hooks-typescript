import { useState } from 'react';

function UseStateComponent() {
  const [array, setArray] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            setArray((prevArray) => [...prevArray, prevArray.length + 1])
          }
        >
          Add to array
        </button>
        {JSON.stringify(array)}
      </div>
      <div>
        <button onClick={() => setName('Rino')}>Set name</button>
        {name}
      </div>
    </div>
  );
}

export default UseStateComponent;
