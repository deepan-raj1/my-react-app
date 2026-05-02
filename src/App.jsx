import { useState } from "react";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Practice 🚀</h1>

      {/* Counter Section */}
      <h2>Counter App 🔥</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      {/* Props Section */}
      <h2>Props Example 👇</h2>

      <Message name="Deepak" role="Python Developer" />
      <Message name="Rahul" role="Frontend Developer" />
      <Message name="Arun" role="AI Engineer" />
    </div>
  );
}

export default App;