import React from 'react';
import '../index.css';

export default function List(props) {
  return (
    <ul>
      {props.items.map((item, index) => {
        return <li key={index} onDoubleClick={() => props.handleDelete(index)} onClick={(e) => props.handleClose(e, index)}>{item.text}</li>
      })}
    </ul>
  )
}