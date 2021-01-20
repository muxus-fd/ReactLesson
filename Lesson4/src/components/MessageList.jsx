import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import '../styles/MessageList.css';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        const { messages, chats } = this.props.state;
        const  chatId  = this.props.chatId;
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                message={ messages[messageId].message }
                author={ messages[messageId].author }
            />));
        return <div className={'messages'}>{ messageElements }</div>;
    }
}