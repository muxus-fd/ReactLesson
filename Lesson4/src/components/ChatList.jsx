import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";

const ChatList = (props) => {
  var chatsArray = Object.entries(props.chats).map((array) => ({
    index: array[0],
    name: array[1].title,
  }));
  var links = chatsArray.map((x) => (
    <Link key={x.index} to={"/chat/"+x.index} >
      <ListItem primaryText={x.name}  rightIcon={<CommunicationChatBubble />} />
    </Link>
  ));
  return <div>
    <List >
      <Subheader >New Chats</Subheader>
      {links}
    </List>
  </div>;
};

export default ChatList;
