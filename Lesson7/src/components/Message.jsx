import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { delMessages } from "../actions/deleteMessageAction";
// import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ActionDeleteForever from 'material-ui/svg-icons/content/clear';
import styles from '../styles/Message';

const iconStyles = {
    display: "block",
    height: 15,
    margin: "auto",
  };
  const buttonStyle = {
      display:"inline-block",
      marginLeft:"auto",
      height:18,
      width:27,
      padding:0,
      backgroundColor: "lightblue",
      border: "none",
      float: "right",
   
  };

// const Message = ({text}) => <span>{text}</span>;

 class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };
    delMessage = () => {
        this.props.delMessages(this.props.chatId, this.props.messageId)
    }

    render() {
        return <div className={this.props.messageId} style={{...styles.message, alignSelf: this.props.author === 'bot' ? 'flex-start' : 'flex-end'}}>
            <div>{this.props.message}</div>
            <div style={styles.author}>{this.props.author}</div>
            <button onClick={this.delMessage} className="buttonDelete" id={this.props.messageId} style={buttonStyle}><ActionDeleteForever style={iconStyles} /></button>
        </div>;
    }
}
const mapStateToProps = (state) => ({
    chats: state.store.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ delMessages }, dispatch);
 export default connect(mapStateToProps, mapDispatchToProps)(Message);