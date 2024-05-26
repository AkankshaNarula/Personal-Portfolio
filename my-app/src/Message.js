// src/Message.js
import React, { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState('Hello, World!');

  const changeMessage = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  );
};

export default Message;
