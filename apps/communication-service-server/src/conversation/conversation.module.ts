import { Module } from "@nestjs/common";
import { ConversationModuleBase } from "./base/conversation.module.base";
import { ConversationService } from "./conversation.service";
import { ConversationController } from "./conversation.controller";
import { ConversationResolver } from "./conversation.resolver";

@Module({
  imports: [ConversationModuleBase],
  controllers: [ConversationController],
  providers: [ConversationService, ConversationResolver],
  exports: [ConversationService],
})
export class ConversationModule {}
