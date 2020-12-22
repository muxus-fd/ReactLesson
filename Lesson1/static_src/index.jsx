import React, { useState } from "react";
import ReactDOM from "react-dom";

let messages = ["Привет", "Как дела?"];

const MessageComponent = (props) => <div>{props.text}</div>;
const Button = (props) => <button onClick={props.click}>send</button>;

const MessageField = (props) => {
  return props.messages.map((message, index) => (
    <MessageComponent text={message} key={index} />
  ));
};
const ListMessage =(props) => {
   return props.list.map( (item, index) => <div key={index}>{item}</div> )
}

const App = () => {
  const [messageslabels, setState] = useState(["Нормально", "Все хорошо", "Круто"]);
  return (
    <div>
      <MessageField messages={messages} />
      <Button
        click={() => {
          var array = messageslabels.concat("Какое то слово");
          setState(array);
        }}
      />
      <ListMessage list={messageslabels} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
