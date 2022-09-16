import { useState } from 'react'
import { Counter } from './components/Counter'
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
      
    </>
  )
}

export default App
