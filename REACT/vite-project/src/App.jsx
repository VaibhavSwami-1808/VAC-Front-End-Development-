import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="counter-card">

        <div className="react-icon">⚛</div>

        <h1>
          React <span>Counter</span>
        </h1>

        <p className="subtitle">
          Click the buttons to change the count
        </p>

        <div className="count-display">
          {count}
        </div>

        <div className="button-group">
          <button
            className="decrease"
            onClick={() => setCount(count - 1)}
          >
            <span className="symbol">−</span>
            Decrease
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            <span className="symbol">⟳</span>
            Reset
          </button>

          <button
            className="increase"
            onClick={() => setCount(count + 1)}
          >
            <span className="symbol">+</span>
            Increase
          </button>
        </div>

        <p className="footer">
          Built with React <span>♥</span>
        </p>

      </div>
    </div>
  )
}

export default App