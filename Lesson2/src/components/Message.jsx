import React from 'react';
import PropTypes from 'prop-types';

// const Message = ({text}) => <span>{text}</span>;

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };

    render() {
        return <span>{this.props.author}: {this.props.message}</span>;
    }
}