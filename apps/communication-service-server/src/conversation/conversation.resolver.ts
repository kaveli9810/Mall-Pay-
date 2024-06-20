import * as graphql from "@nestjs/graphql";
import { ConversationResolverBase } from "./base/conversation.resolver.base";
import { Conversation } from "./base/Conversation";
import { ConversationService } from "./conversation.service";

@graphql.Resolver(() => Conversation)
export class ConversationResolver extends ConversationResolverBase {
  constructor(protected readonly service: ConversationService) {
    super(service);
  }
}
