import React from 'react';

const Notification = ({ message }) => {

    if (message === null) {
        return null;
    }

    return (
        <div className='message' id={message.id}>
            {message.text}
        </div>
    )
}

export default Notification;