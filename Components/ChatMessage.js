import React from "react";

const ChatMessage = ({ username, message, date}) => {
    return (
        <div className="chat-message">
            <p><strong>{username}</strong> <small>{date}</small></p>
            <p>{message}</p>
        </div>
    );
};

export default ChatMessage;