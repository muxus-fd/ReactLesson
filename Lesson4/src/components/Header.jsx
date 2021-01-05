import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };
 
    
    render() {
        return <>
         <div><Link to="/profile">Profile</Link></div>
        <div>Чат { this.props.chatId }</div>
        </>
    }
}