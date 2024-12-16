```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, causing an infinite loop
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```