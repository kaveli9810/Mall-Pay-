import { ConversationWhereInput } from "./ConversationWhereInput";
import { ConversationOrderByInput } from "./ConversationOrderByInput";

export type ConversationFindManyArgs = {
  where?: ConversationWhereInput;
  orderBy?: Array<ConversationOrderByInput>;
  skip?: number;
  take?: number;
};
