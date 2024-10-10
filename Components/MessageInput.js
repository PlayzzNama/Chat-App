import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const fileInputRef = React.createRef();

    const handleSend = () => {
        if (message || fileInputRef.current.files[0]) {
            const fileName = fileInputRef.current.files[0] ? fileInputRef.current.files[0].name : '';
            onSend(username, message || fileName);
            setMessage('');
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
                placeholder="Type your mesagge here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <input
                type="file"
                ref={fileInputRef}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default MessageInput;