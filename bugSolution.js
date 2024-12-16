```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now the effect runs only when count changes
    console.log('Effect runs');
    // Add a condition to stop the infinite loop
    if(count<10){
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```