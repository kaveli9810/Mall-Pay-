import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationService } from "./conversation.service";
import { ConversationControllerBase } from "./base/conversation.controller.base";

@swagger.ApiTags("conversations")
@common.Controller("conversations")
export class ConversationController extends ConversationControllerBase {
  constructor(protected readonly service: ConversationService) {
    super(service);
  }
}
