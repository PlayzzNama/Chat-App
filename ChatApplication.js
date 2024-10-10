import React, { useState } from 'react';
import ChatMessage from './Components/ChatMessage';
import MessageInput from './Components/MessageInput';
import './App.css'

const Chat = () => {
  const [mesagge, setMessage] = useState([]);

  const handleSend = (username, mesagge) => {
    const date = new Date().toLocaleString();
    setMessage([...mesagge, { username, mesagge, date }]);
  };

  return (
    <div className='chat-container'>
      <div className='chat-header'>
        {mesagge.map((msg, index) => (
          <ChatMessage
            key={index}
            username={msg.username}
            message={msg.mesagge}
            date={msg.date}
          />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default Chat;