import React from "react";
import { Switch, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import initStore, { history } from '../store';

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

const { store, persistor } = initStore();

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
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <ConnectedRouter history={history}> 
          <MuiThemeProvider> 
                <Switch>
                  <Route exact path='/' component={Messages} />
                  <Route path='/chat/:chatId/' render={ obj => <Messages chatId={Number.parseInt(obj.match.params.chatId)} />}/>
                  <Route path='/profile' component={Profile} />
                </Switch>
          </MuiThemeProvider>
        </ConnectedRouter>
      </PersistGate>
      </Provider>
    );
  }
}
