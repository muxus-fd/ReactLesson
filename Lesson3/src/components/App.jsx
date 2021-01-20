import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Message from "./Message.jsx";
import Example from "./Example";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import ChatList from "./ChatList";
import Header from "./Header";
import Layout from "./Layout";

import "../styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Some text from state",
      timeout: null,
      messages: [],
      interval: null,
    };
  }

  // componentDidMount(){
  //     console.log('componentDidMount');
  //     // const timeout = setTimeout(
  //     //     () => {
  //     //         this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']});
  //     //     },
  //     //     500
  //     // );
  //     // const interval = setInterval(
  //     //     () => {
  //     //         this.setState({messages: [...this.state.messages, 'How are you?']});
  //     //         setTimeout(
  //     //             () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
  //     //             1000
  //     //         );
  //     //     },
  //     //     2000
  //     // );
  //     // this.setState({timeout});
  //     // this.setState({interval});
  //     // fetch()....then(res => { ...... this.setState(...) })
  // }
  

  componentDidUpdate(prevProps, prevState) {
    //   var countMessageUser = 0;
    //   this.state.messages.forEach((item) => {
    //       if (item.author === 'me' ) {
    //         countMessageUser ++
    //       }
    //    });
    //    console.log(countMessageUser);
    // console.log("componentWillUpdate");
    // console.log(this.state.messages.length, this.state.messages.length % 2);
    if (prevState.messages.length < this.state.messages.length &&  this.state.messages[this.state.messages.length -1 ].author === 'me' ) {
      // console.log();
      const timeout = setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            { message: "I do not answer you. I am robot", author: "robot" },
          ],
        });
        this.setState({ timeout });
      }, 2000);
      // this.setState({timeout});
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
    // clearInterval(this.state.interval);
    this.setState({ timeout: null });
    // this.setState({interval: null});
  }

  send = (objMsg) => {
    this.setState({ messages: [...this.state.messages, objMsg] });
    // const timeout = setTimeout(
    //     () => {
    //         this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
    //     },
    //     1000
    // );
    // this.setState({timeout});
  };

  render() {
    console.log("render");
    return (
      <MuiThemeProvider>
        <>
          <Layout
            header={() => <Header />}
            chatList={() => <ChatList />}
            messageField={() => <MessageList messages={this.state.messages} />}
            sendMessage={() => <SendMessage send={this.send} />}
          />
        </>
      </MuiThemeProvider>
    );
  }
}
