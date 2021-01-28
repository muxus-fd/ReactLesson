export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessages = (messageId, text, sender, chatId) => ({
   type: SEND_MESSAGE,
   messageId,
   text,
   sender,
   chatId,
});