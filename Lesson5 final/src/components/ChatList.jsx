import React from "react";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import { addChat } from '../actions/chatActions';




const ChatList = (props) => {
  var chatsArray = Object.entries(props.chats).map((array) => ({
    index: array[0],
    name: array[1].title,
  }));
    const handleAddChat = () => {
      props.addChat()
  };
    
  var links = chatsArray.map((x) => (
    <Link key={x.index} to={"/chat/"+x.index} >
      <ListItem primaryText={x.name}  rightIcon={<CommunicationChatBubble />} />
    </Link>
  ));
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

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect (mapStateToProps, mapDispatchToProps)(ChatList) ;
