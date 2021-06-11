import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ho</h1>
      <p>I am {count}</p>
      <button onClick={() => setCount(count + 1)}>HY</button>
    </>
  );
}
export default App;
