import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import PushToggle from './PushToggle';
import InstallPopup from "./InstallPopup";

class Header extends React.Component{
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };
 
    
    render() {
        return <>
        <PushToggle />
         <div><Link to="/profile">Profile</Link></div>
         <div>Мое имя - { this.props.profile.name }</div>
        <div>Чат { this.props.chatId }</div>
        <InstallPopup/>
        </>
    }
}

const mapStateToProps = function (state) {
    return  state.profile;
}
 
 const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
 export default connect(mapStateToProps, mapDispatchToProps)(Header);