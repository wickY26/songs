import React from 'react';
import classes from './Message.module.css';

const Message = ({ message, style }) => {
  return (
    <div style={style} className={classes.wrapper}>
      {message}
    </div>
  )
}

export default Message;
