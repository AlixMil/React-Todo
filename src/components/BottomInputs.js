import React from 'react';
import '../index.css';
import Button from '@material-ui/core/Button';

export default function BottomInputs(props) {
  return (
    <>
      <Button variant='outlined' color='primary' className='accept-button' onClick={props.handleAccept}>
        Accept
      </Button>
      <Button variant='outlined' color='secondary' className='clear-button' onClick={props.handleClear}>
        Clear
      </Button>
    </>
  )
} 