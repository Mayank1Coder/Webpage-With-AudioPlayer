import React, { useState, useEffect } from 'react';
import io from 'io/client';

const socket = io('http://localhost:3001');

function ChatApp() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', { username, message });
      setMessage('');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Chat App</h1>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.username}</strong>: {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatApp;
