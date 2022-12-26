import React from 'react';
import { MessageSimple, useMessageContext } from 'stream-chat-react';

const TeamMessages = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <MessageSimple
            message={{ ...message, user: {}}}
            // handleOpenThread={}
        />
    )
}

export default TeamMessages;
