export const DEL_MESSAGE = '@@chat/DEL_MESSAGE';

export const delMessages = (chatId, messageId) => ({
   type: DEL_MESSAGE,
   chatId,
   messageId,
});