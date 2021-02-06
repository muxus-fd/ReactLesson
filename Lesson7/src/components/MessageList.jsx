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
        if (chats[chatId] === undefined){return <div className={'messages'}></div>}
        else{
        let messageElements = chats[chatId].messageList.map((messageId, index) => {
            if (messages[messageId] !== undefined) {
               return  <Message
                key={ index }
                chatId = {this.props.chatId}
                messageId = {messageId}
                message={ messages[messageId].message }
                author={ messages[messageId].author }
                />  
            }
            else {
                return undefined;
            }});
            messageElements =  messageElements.filter(x => x !== undefined);
        return <div className={'messages'}>{ messageElements }</div>;}
    }
}
const mapStateToProps = (state) => ({
    chats: state.store.chats,
    messages: state.store.messages,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(MessageList);