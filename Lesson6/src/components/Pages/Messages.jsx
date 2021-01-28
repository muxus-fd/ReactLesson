import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageList from "../MessageList";
import SendMessage from "../SendMessage";
import ChatList from "../ChatList";
import Header from "../Header";
import Layout from "../Layout";
import PropTypes from 'prop-types';
import { sendMessages } from "../../actions/messageActions";

class Messages extends React.Component{

    state = {
        input: '',
    };
    
    static propTypes = {
        chatId: PropTypes.number,
        sendMessages: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1
    };
    // componentDidUpdate(prevProps, prevState) {
    //     const messages  = this.props.messages;
    //     if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
    //         Object.values(messages)[Object.values(messages).length - 1].author === 'me') {
    //         setTimeout(() =>
    //             this.send('Не приставай ко мне, я робот!', 'bot'), 1000);
    //     }
    // }
 
 
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
        const messages = this.props.messages;
        const {chatId}  = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.props.sendMessages(messageId, message, sender, chatId);
    };
    // addChat = () => {
    //     const { chats } = this.state;
      
    //     const chatId = Object.keys(chats).length + 1;
    //     this.setState({
    //         chats: {...chats,
    //             [chatId]: {title: "Чат"+chatId, messageList: []}},
    //     })
    //   };
 

        render(){
            return <>
                    <Layout
                    header={() => <Header chatId={ this.props.chatId }/>}
                    chatList={() => <ChatList chatId={ this.props.chatId }/>}
                    messageField={() => <MessageList chatId={ this.props.chatId } />}
                    sendMessage={() => <SendMessage chatId={ this.props.chatId } send={this.send} />}
                    />
                    </>
        }
}
const mapStateToProps = (state) => ({
    chats: state.store.chats,
    messages: state.store.messages,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ sendMessages }, dispatch);
 export default connect(mapStateToProps, mapDispatchToProps)(Messages);
 