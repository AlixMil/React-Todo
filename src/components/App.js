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

  const handleSelect = (e) => {
    if (e.target !== undefined) {
      e.target.classList.toggle('selected');
    } else {
      console.log(e);
    }
  }

  const handleClose = (e, index) => {
    handleSelect(e);
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
      const sliceState = state.slice(0);
      sliceState.splice(index, 1);
      return sliceState
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

  const handleAccept = () => {
    setTodos((state) => {
      const modifyArray = state.filter((obj) => {
        return obj.checked !== true;
      })
      handleSelect(modifyArray)
      return modifyArray
    })
    
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