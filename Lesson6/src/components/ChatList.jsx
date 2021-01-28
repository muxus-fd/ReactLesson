import React from "react";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import { push } from 'connected-react-router';
import Subheader from "material-ui/Subheader";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import { addChat } from '../actions/chatActions';
import { removeChat } from "../actions/removeChat";
import { FixedSizeList } from 'react-window';

const delStyle = {
  display:"inline-block",
  marginLeft:"auto",
  height:48,
  width:28,
  padding:0,
  backgroundColor: "lightblue",
  border: "none",
  float: "right",
  zIndex: 99,

};


const ChatList = (props) => {
  var chatsArray = Object.entries(props.chats).map((array) => ({
    index: array[0],
    name: array[1].title,
  }));
    const handleAddChat = () => {
      props.addChat()
  };
  const handleNavigate = (link) => {
    props.push(link);
};
const delChat = (event) => {
  handleNavigate("/");
  const id = event.target.value;
  props.removeChat(id)
};
  
    
  var links = chatsArray.map((x) => {
   return <>
      <div style={{display:"inline-block",    width: "80%"}}><ListItem primaryText={x.name} key={x.index} onClick={ () => handleNavigate(`/chat/${x.index}`) } /></div>
      <button value={x.index} onClick={delChat} style={delStyle}> Del</button>
      </>
    });
  return <div>
    <List >
      <Subheader >New Chats</Subheader>
      {links}
      <button onClick={handleAddChat} style={{margin:'16px'}}> New chat </button>
    </List>
  </div>;
};
const mapStateToProps = (state) => ({
  chats: state.store.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push, removeChat }, dispatch);

export default connect (mapStateToProps, mapDispatchToProps)(ChatList) ;
