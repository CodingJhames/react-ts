import { useState } from 'react'
import { Counter } from './components/Counter'
import { CounterReducer } from './components/CounterReducer'
import { Form } from './components/Form'
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

      <br/>

      <h2>Custom Hooks</h2>
      <hr/>
      <Form />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default App
