import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "id";

export const ConversationTitle = (record: TConversation): string => {
  return record.id?.toString() || String(record.id);
};
