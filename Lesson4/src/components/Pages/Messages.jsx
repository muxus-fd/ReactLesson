import React from "react";
import MessageList from "../MessageList";
import SendMessage from "../SendMessage";
import ChatList from "../ChatList";
import Header from "../Header";
import Layout from "../Layout";
import PropTypes from 'prop-types';

export default class Messages extends React.Component{

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: [3]},
            4: {title: 'Чат 4', messageList: [4]},
            5: {title: 'Чат 5', messageList: [5]},
        },
        messages: {
            1: { message: "Привет!", author: 'bot' },
            2: { message: "Здравствуйте!", author: 'bot' },
            3: { message: "Hello!", author: 'bot' },
            4: { message: "hi!", author: 'bot' },
            5: { message: "Ola Amigo!", author: 'bot' },
        },
        input: '',
    };
    
    static propTypes = {
        chatId: PropTypes.number
    };

    static defaultProps = {
        chatId: 1
    };
    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].author === 'me') {
            setTimeout(() =>
                this.send('Не приставай ко мне, я робот!', 'bot'), 1000);
        }
    }
 
 
    // componentDidUpdate(prevProps, prevState) {

    //     if (prevState.messages.length < this.state.messages.length &&  this.state.messages[this.state.messages.length -1 ].author === 'me' ) {
    //       // console.log();
    //       const timeout = setTimeout(() => {
    //         this.setState({
    //           messages: [
    //             ...this.state.messages,
    //             { message: "I do not answer you. I am robot", author: "robot" },
    //           ],
    //         });
    //         this.setState({ timeout });
    //       }, 2000);
    //       // this.setState({timeout});
    //     }
    //   }

    // send = (objMsg) => {
    //     console.log(objMsg);
    //     this.setState({ messages: [...this.state.messages, objMsg] });
    //   };
    send = (message, sender) => {
        const { messages, chats} = this.state;
        const {chatId}  = this.props;
        const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                    [messageId]: {message: message, author: sender}},
                chats: {...chats,
                    [chatId]: { ...chats[chatId],
                        messageList: [...chats[chatId]['messageList'], messageId]
                    }
                },
            })
    };
 

        render(){
            return <>
                    <Layout
                    header={() => <Header chatId={ this.props.chatId }/>}
                    chatList={() => <ChatList chats={this.state.chats} />}
                    messageField={() => <MessageList state={this.state} chatId={ this.props.chatId } />}
                    sendMessage={() => <SendMessage chatId={ this.props.chatId } send={this.send} />}
                    />
                    </>
        }
}