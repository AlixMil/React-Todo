import React, { useState, useEffect } from 'react';
import MakeDo from '../components/MakeDo';
import List from '../components/List';
import BottomInputs from '../components/BottomInputs';
import JSONData from '../JSON data/checkList.json';
import '../index.css';

function App() { 
  const [todo, setTodos] = useState(
    [
      { text: 'example', done: false, checked: false },
      { text: 'second example', done: false, checked: false }
    ]
  );

  // useEffect(()=> () ,[todo.])

// Code add new task

  const handleAdd = (value) => {
    setTodos((prevState) => {
      return [ ...prevState, { text: value, done: false, checked: false}]
    })
  }

// Code action check task

  const handleClose = (e, index) => {
    e.target.classList.toggle('selected');
    setTodos((state) => {
      const newState = [...state];
      if (newState[index].checked === false) {
        newState[index] = {...newState[index], checked: true};
      } else {
        newState[index] = {...newState[index], checked: false}
      }
      return newState
    });
  };

// Code delete one element in list

  const handleDelete = (index) => {
    setTodos((state) => {
      // state.splice(index, 1);
      const newState = state.filter(() => {
        
      })
      return newState
    })
  }

// Code clear check list

  const handleClear = () => {
    const value = window.confirm('Are you sure?');
    if (value === true) {
      setTodos([]);
    } else {
      console.log('Ok')
    }
  }

// Code accepted check action

  const handleAccept = (value) => {
    
  }

// Code import JSON data

  const handleJSON = () => {
    setTodos((state) => {
      return [...state, ...JSONData]
    })
  }

  return (
    <div className='root-wrapper'>
      <div className='top-wrapper'>
        <h1>Todo List Hooks</h1>
        <MakeDo 
          handleAdd={handleAdd}
        />
      </div>
      <div className='main-wrapper'>
        <List 
          handleClose={handleClose}
          handleDelete={handleDelete}
          items={todo}
          // removeItems={setTodos([])}
        />
      </div>
      <div className='bot-wrapper'>
        <BottomInputs 
          handleClear={handleClear}
          handleAccept={handleAccept}
        />
      </div>
      <input 
        type='button'
        onClick={handleJSON}
        value='addJSON'
      />
    </div>
  )
}

export default App