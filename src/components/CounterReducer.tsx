import { useReducer } from "react";

const initialState = {
    counter: 0
}

type ActionType = 
    | { type: 'increment' }
    | { type: 'decrement'}
    | { type: 'custom', payload: number }

const countReducer = ( state: typeof initialState, action: ActionType ) => {
    
    switch ( action.type ) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
            case 'custom':
                return {
                    ...state,
                    counter: action.payload
                }
        default:
            return state;
    }

    return state;
}

export const CounterReducer = () => {

    const [counterState, dispatch] = useReducer( countReducer, initialState );


    return (
    <>
    
        <h2>Counter: { counterState.counter } </h2>
        <button className="btn btn-primary"
        onClick={ () => dispatch( { type: 'increment'} ) }>+ 1</button>

        <button className="btn btn-primary"
        onClick={ () => dispatch( { type: 'decrement'} ) }>- 1</button>

        <button className="btn btn-danger"
        onClick={ () => dispatch( { type:'custom', payload: 100 } ) }>- 1</button>
    </>
    )
}
