
import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";
import {DEL_MESSAGE} from "../actions/deleteMessageAction";
import {REMOVE_CHAT} from "../actions/removeChat";

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: [3]},
        4: {title: 'Чат 4', messageList: [4]},
        5: {title: 'Чат 5', messageList: [5]},
    },
    messages: {
        1: { message: "Привет!", author: 'bot' },
        2: { message: "Здравствуйте!", author: 'bot' },
        3: { message: "Hello!", author: 'bot' },
        4: { message: "hi!", author: 'bot' },
        5: { message: "Ola Amigo!", author: 'bot' },
    },
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
     case SEND_MESSAGE: {
       return update(store, {
         messages: {
           $merge: {
             ...store.messages,
             [action.messageId]: {
               message: action.text,
               author: action.sender,
             },
           },
         },
         chats: {
           $merge: {
             [action.chatId]: {
               title: store.chats[action.chatId].title,
               messageList: [
                 ...store.chats[action.chatId].messageList,
                 action.messageId,
               ],
             },
           },
         },
       });
     }
     case ADD_CHAT: {
       const chatId = Object.keys(store.chats).length + 1;
       return update(store, {
         chats: {
           $merge: {
             [chatId]: {
               title: "Чат " + chatId,
               messageList: [],
             },
           },
         },
       });
     }
     case REMOVE_CHAT: {
         console.log(action);
        delete store.chats[action.chatId];
        return update(store, {
          chats: {
              $set: {
                  ...store.chats
              }
          },
        });
      }
     case DEL_MESSAGE: {
       console.log({ action });
    //    store.chats[action.chatId].messageList = store.chats[action.chatId].messageList.filter(x => x!== action.messageId)
       return update(store, {
        chats: {
          $merge: {
            [action.chatId]: {
              title: "Чат " + action.chatId,
              messageList: store.chats[action.chatId].messageList.filter(x => x!== action.messageId),
            },
          },
        },
      });
     }

     default:
       return store;
   }
}
