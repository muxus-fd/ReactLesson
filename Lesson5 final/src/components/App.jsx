import React from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from '../store';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Message from "./Message.jsx";
import Example from "./Example";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import ChatList from "./ChatList";
import Header from "./Header";
import Layout from "./Layout";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";

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



  componentWillUnmount() {
    clearTimeout(this.state.timeout);
    // clearInterval(this.state.interval);
    this.setState({ timeout: null });
    // this.setState({interval: null});
  }

  // send = (objMsg) => {
  //   this.setState({ messages: [...this.state.messages, objMsg] });
  // };

  render() {
    console.log("render");
    return (
    <Provider store={ initStore() }>
      <MuiThemeProvider>
        <BrowserRouter>  
            <Switch>
              <Route exact path='/' component={Messages} />
              <Route path='/chat/:chatId/' render={ obj => <Messages chatId={Number.parseInt(obj.match.params.chatId)} />}/>
              <Route path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
      </Provider>
    );
  }
}
