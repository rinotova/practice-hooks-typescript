import { useRef, useState } from 'react';

function UseRefComponent() {
  const [text, setText] = useState('');
  const elementRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <input
        onChange={() => setText(elementRef.current?.value || '')}
        value={text}
        ref={elementRef}
        type='text'
      />
      <p>{text}</p>
    </div>
  );
}

export default UseRefComponent;
