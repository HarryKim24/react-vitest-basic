import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ width: 40 }}
      >+</button>
    </div>
  )
}

export default Counter
