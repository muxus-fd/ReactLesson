import React from 'react';

import Message from './Message.jsx';
import Example from './Example';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

/*
const App = (props) => {

    const state = {
        test: 'text'
    };

    return <main><Message text={state.text}/></main>;
};
*/

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: 'Some text from state',
            timeout: null,
            messages: [],
            interval: null
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
        // const timeout = setTimeout(
        //     () => {
        //         this.setState({text: this.state.text + ' Updated'});
        //     },
        //     2000
        // );
        // const interval = setInterval(
        //     () => {
        //         this.setState({messages: [...this.state.messages, 'How are you?']});
        //         setTimeout(
        //             () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
        //             1000
        //         );
        //     },
        //     2000
        // );
        // this.setState({timeout});
        // this.setState({interval});
        // fetch()....then(res => { ...... this.setState(...) })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 >0){
         const timeout = setTimeout(
            () => {
                this.setState({messages: [...this.state.messages , {message:' I do not answer you. I am robot', author: 'bot'}]});
            },
            1000
        );
    }
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        clearInterval(this.state.interval);
        this.setState({timeout: null});
        this.setState({interval: null});
    }
    send = objMsg =>{
        this.setState({messages: [...this.state.messages, objMsg]})
    };

    render() {
        console.log('render');
        return <main>
            <MessageList messages={this.state.messages}/>
            <SendMessage send={this.send}/>
        </main>;
    }
}