import { useState } from 'react'
import { Counter } from './components/Counter'
import { CounterReducer } from './components/CounterReducer'
import { Timer } from './components/Timer'

import { TimerParent } from './components/TimerParent'
import { User } from './components/User'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React + TS</h1>
      <hr/>
      <Counter />
      <User/>

      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerParent />
      
      <h2>useReducer</h2>
      <hr/>
      <CounterReducer />

    </>
  )
}

export default App
