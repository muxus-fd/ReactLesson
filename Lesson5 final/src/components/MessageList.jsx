import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import Message from './Message';

import '../styles/MessageList.css';

 class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        messages: {}
    };

    render() {
        const messages  = this.props.messages;
        const chats = this.props.chats;
        const chatId  = this.props.chatId;
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                message={ messages[messageId].message }
                author={ messages[messageId].author }
            />));
        return <div className={'messages'}>{ messageElements }</div>;
    }
}
const mapStateToProps = (state) => ({
    chats: state.store.chats,
    messages: state.store.messages,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(MessageList);