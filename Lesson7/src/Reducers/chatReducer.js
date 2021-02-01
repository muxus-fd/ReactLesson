import update from "react-addons-update";
import {
  SEND_MESSAGE,
  START_MESSAGES_LOADING,
  SUCCESS_MESSAGES_LOADING,
  ERROR_MESSAGES_LOADING,
} from "../actions/messageActions";
import {
  START_CHATS_LOADING,
  SUCCESS_CHATS_LOADING,
  ERROR_CHATS_LOADING,
} from "../actions/chatActions";
import { ADD_CHAT } from "../actions/chatActions";
import { DEL_MESSAGE } from "../actions/deleteMessageAction";
import { REMOVE_CHAT } from "../actions/removeChat";

const initialStore = {
  chats: {},
  messages: {},
  isLoading: true,
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
            ...store.chats,
          },
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
              messageList: store.chats[action.chatId].messageList.filter(
                (x) => x !== action.messageId
              ),
            },
          },
        },
      });
    }
    case START_CHATS_LOADING: {
      return update(store, {
        isLoading: { $set: true },
      });
    }
    case SUCCESS_CHATS_LOADING: {
      return update(store, {
        messages: { $set: action.payload.entities.messages },
        chats: { $set: action.payload.entities.chats },
        isLoading: { $set: false },
      });
    }
    case ERROR_CHATS_LOADING: {
      return update(store, {
        isLoading: { $set: false },
      });
    }

    default:
      return store;
  }
}
