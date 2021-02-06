import React from 'react';

const layoutStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        

};
const headerStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "space-around",
    textAlign: 'center',
    lineHeight: '30px',
    height: '30px',
    background: 'lightblue',

};
const chatListStyle = {
    background: 'lightblue',
    width:'150px',
    flex:' 1 1 1',
};
const messageFieldStyle = {
    
    flex: 2,
};


export default class Layout extends React.Component{
    render() {
        let Header = this.props.header;
        let ChatList = this.props.chatList;
        let MessageField = this.props.messageField;
        let SendMessage = this.props.sendMessage;
        return <div style={layoutStyle}>
                <div style={headerStyle}><Header/></div>
                <div style={{width: '100%', display: 'flex', minHeight: "368px",}}>
                    <div style={chatListStyle}><ChatList/></div>
                    <div style={messageFieldStyle}><MessageField/></div>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', background: 'lightblue',}}><SendMessage/></div>
        </div>
    }
}