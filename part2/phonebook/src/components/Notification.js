import React from 'react';

const Notification = ({ message }) => {

    if (message === null) {
        return null;
    }

    else {
        console.log(message.id);

        let messageStyle = {
            color: message.id,
            backgroundColor: 'lightgray',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        };

        return (
            <div style={messageStyle}>
                {message.text}
            </div>
        )
    }
}

export default Notification;