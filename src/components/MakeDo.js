import React from 'react';
import '../index.css';

export default function MakeDo(props) {
  const handleKey = (e) => {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        props.handleAdd(e.target.value);
        e.target.value = '';
      }
    }
  }

  return (
    <div>
      <input 
        type='text' 
        placeholder='write do this' 
        onKeyUp={handleKey} 
        className='input'
      />
    </div>
  )
}