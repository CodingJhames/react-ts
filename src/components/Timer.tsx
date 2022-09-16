import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  miliseconds: number
}


export const Timer = ( { miliseconds }: TimerArgs ) => {

  const [seconds, setSeconds] = useState(0);
  const ref = useRef<number>();

  // console.log( args.miliseconds );

  useEffect(() => {
      ref.current && clearInterval( ref.current );
    // console.log('useEffect');
      ref.current = setInterval( () => setSeconds( sec => sec + 1 ), miliseconds );
  }, [miliseconds])
  

  return (

    <>
      <h4>Timer: <small>{ seconds }</small> </h4>
    </>

    
  )
}
