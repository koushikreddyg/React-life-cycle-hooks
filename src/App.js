import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Form from './Form';

// const App = () => {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('')
//   useEffect(()=>{},[])

//   return (
//     <div>
//       {notes.map(({ title, body }) =>
//         (<Notes title={title} body={body} setNotes={title => setNotes(notes.filter(item => item.title !== title))} />))
//       }

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           setNotes([
//             ...notes,
//             { title, body }
//           ]);
//           setTitle('')
//           setBody('')
//         }}
//       >
//         <input value={title} onChange={({ target: { value } }) => setTitle(value)} />
//         <input value={body} onChange={({ target: { value } }) => setBody(value)} />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// }

const Notes = ({ title, body, setNotes }) => {

  // component will unmount
  useEffect(() => {
    console.log('component mounted')
    return () => {
      console.log('component unmounted')
    }
  }, [])
  return (<div key={title}>
    <h1>{title}</h1>
    <h2>{body}</h2>
    <button onClick={() => { setNotes(title) }}>remove</button>
  </div>)
}

const initialState = { count: 0, text: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'count':
      return { ...state, count: action.payload }
    case 'input':
      return { ...state, text: action.payload }
    default:
      return state;
  }
}

export const CounterContext = React.createContext();

export function mousePosition() {
  const [state, setState] = useState({ x: 0, y: 0 });
  useEffect(()=>{
    
    document.addEventListener('mousemove',(e)=>{
      console.log('event occured')
      setState({
        x: e.pageX,
        y: e.pageY
      })
    })
  },[])
  return state;

}


const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const mouse= mousePosition();
  useEffect(() => {
    dispatch({ type: 'count', payload: props.count })
  }, [])
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div className="App">
      <div>{mouse.x}-{mouse.y}</div>
        <p>Current {state.text} is {state.count}</p>
        <Form />

      </div>
    </CounterContext.Provider>
  );
}

// const App = (props) => {
//   // const [state, setState]= useState({count: props.count, text: ''})
//   const[state, dispatch]= useReducer(reducer, initialState)
//   return (
//     <div className="App">
//       <p>Current {state.text} is {state.count}</p>
//       <button onClick={() => { setState({count: state.count+1}) }}>increase</button>
//       <button onClick={() => { setState({count: state.count-1}) }}>decrease</button>
//       <button onClick={() => { setState({count: props.count}) }}>reset</button>
//       <br />
//       <input value={state.text} onChange={({ target: { value } }) => { setState({text: value}) }} />
//     </div>
//   );
// }

// const App = (props) => {
//   const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0)
//   const [text, setText] = useState('count');

//   // component did mount 
//   useEffect(() => {
//     console.log('it should run only once')
//   }, [])
// component will update based on particular variable
//   useEffect(() => {
//     console.log('count changed')
//     document.title = count;
//     localStorage.setItem('count', count);
//   }, [count])

//   return (
//     <div className="App">
//       <p>Current {text} is {count}</p>
//       <button onClick={() => { setCount(count + 1) }}>increase</button>
//       <button onClick={() => { setCount(count - 1) }}>decrease</button>
//       <button onClick={() => { setCount(0) }}>reset</button>
//       <br />
//       <input value={text} onChange={({ target: { value } }) => { setText(value) }} />
//     </div>
//   );
// }

App.defaultProps = {
  count: 20,
}

export default App;
