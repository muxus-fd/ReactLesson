
import { SEND_MESSAGE, sendMessages } from "../actions/messageActions";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGE:
           if (action.sender === 'me') {
            setTimeout(() => store.dispatch(sendMessages(Object.keys(store.getState().store.messages).length + 1,
            'Не приставай ко мне, я робот!', 'bot', action.chatId)), 1000)
           }
   }
   return next(action)
}
