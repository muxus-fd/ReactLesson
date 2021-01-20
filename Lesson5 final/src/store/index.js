
import { createStore } from 'redux';
import initReducers from '../Reducers';


function initStore() {
   const innitialStore = {
      // store:{
      //    chats:{},
      //    messages:{}
      // },
      // profile:{}
   };

   return createStore(
       initReducers,
       innitialStore,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
   );
}

export default initStore;
