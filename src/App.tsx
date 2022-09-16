import { useState } from 'react'
import { Counter } from './components/Counter'
import { User } from './components/User'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React + TS</h1>
      <hr/>
      <Counter />
      <User/>
    </>
  )
}

export default App
