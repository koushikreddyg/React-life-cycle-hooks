import React, { useContext } from 'react';
import { CounterContext } from './App';

const Form = () => {
    const {dispatch, state}= useContext(CounterContext)
    return (
        <div>
            <button onClick={() => { dispatch({ type: 'count', payload: state.count + 1 }) }}>increase</button>
            <button onClick={() => { dispatch({ type: 'count', payload: state.count - 1 }) }}>decrease</button>
            <button onClick={() => { dispatch({ type: 'count', payload: 0 }) }}>reset</button>
            <br />
            <input value={state.text} onChange={({ target: { value } }) => { dispatch({ type: 'input', payload: value }) }} />
        </div>
    )
}

export default Form;