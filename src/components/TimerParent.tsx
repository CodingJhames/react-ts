import { useState } from 'react';
import { Timer } from './Timer';



export const TimerParent = () => {

  const [miliseconds, setMiliseconds] = useState(1000);


  return (
    <>
        <span> Milisegundos { miliseconds}</span>
        <br/>

        <button className="btn btn-outline-success"
        onClick={ () => setMiliseconds(1000)}>
          1000
        </button>

        <button className="btn btn-outline-success"
        onClick={ () => setMiliseconds(2000)}>
          2000
        </button>

        <Timer miliseconds={ miliseconds } />
    </>
  )
}
