import React from 'react';
const layoutStyle = {
        display: 'flex',
        flexWrap: 'wrap',

};
const headerStyle = {
    width: '100%',
    textAlign: 'center',
    lineHeight: '30px',
    height: '30px',
    background: 'lightblue',

};
const chatListStyle = {
    background: 'lightblue',
    flex:' 1 1 1',
};
const messageFieldStyle = {
    
    flex: 2,
};


export default class Layout extends React.Component{
    render() {
        var Header = this.props.header;
        var ChatList = this.props.chatList;
        var MessageField = this.props.messageField;
        var SendMessage = this.props.sendMessage;
        return <div style={layoutStyle}>
                <div style={headerStyle}><Header/></div>
                <div style={{width: '100%', display: 'flex'}}>
                    <div style={chatListStyle}><ChatList/></div>
                    <div style={messageFieldStyle}><MessageField/></div>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', background: 'lightblue',}}><SendMessage/></div>
        </div>
    }
}