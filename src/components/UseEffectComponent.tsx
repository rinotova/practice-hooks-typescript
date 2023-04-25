import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const timerInterval = setInterval(() => setValue((prev) => prev + 1), 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return <div>{value}</div>;
}

export default UseEffectComponent;
