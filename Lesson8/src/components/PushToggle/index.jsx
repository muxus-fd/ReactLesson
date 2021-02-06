
import React from 'react';
import './style.css';

export default class PushToggle extends React.Component {
   render() {
       return <div className="push">
           <img className="push__image" src="/images/push-off.png" alt="Push Notification"/>
       </div>
   }
}
