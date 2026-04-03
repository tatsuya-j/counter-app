import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>カウンター</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>−</button>
        <button onClick={() => setCount(0)}>リセット</button>
        <button onClick={() => setCount(count + 1)}>＋</button>
      </div>
    </div>
  )
}

export default App
