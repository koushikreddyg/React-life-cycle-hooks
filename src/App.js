import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('')
  useEffect(()=>{},[])

  return (
    <div>
      {notes.map(({ title, body }) =>
        (<Notes title={title} body={body} setNotes={title => setNotes(notes.filter(item => item.title !== title))} />))
      }

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNotes([
            ...notes,
            { title, body }
          ]);
          setTitle('')
          setBody('')
        }}
      >
        <input value={title} onChange={({ target: { value } }) => setTitle(value)} />
        <input value={body} onChange={({ target: { value } }) => setBody(value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

const Notes = ({ title, body, setNotes }) => {
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

// const App = (props) => {
//   const [state, setState]= useState({count: props.count, text: ''})
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
