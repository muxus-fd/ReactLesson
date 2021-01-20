import React from 'react';
import PropTypes from 'prop-types';

// import {TextField} from 'material-ui';
import TextField from 'material-ui/TextField';
// import Button from 'material-ui/RaisedButton';

export default class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }

    state = {
        message: ''
    };
       // Ставим фокус на <input> при монтировании компонента
   componentDidMount() {
    this.textInput.current.focus();
}

    static propTypes = {
        send: PropTypes.func.isRequired
    };
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.send(message)
        }
    };

    send = () => {
        this.props.send({message: this.state.message, author: 'me'});
        this.setState({message: ''});
    };

    handleChange = event => this.setState({message: event.target.value});

    render() {
        return <>
            <TextField 
                       value={this.state.message}
                       ref={ this.textInput }
                       style={ { fontSize: '22px', width: '40%' } }
                       onChange={this.handleChange} 
                       onKeyUp={ (event) => this.handleKeyUp(event, this.state.message)}
                       fullWidth={true}
                    //    multiline={true} 
                       name={'message'}
                    />
            <button onClick={this.send}>Send</button>
            </>;
    }
}