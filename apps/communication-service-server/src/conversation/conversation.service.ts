import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationServiceBase } from "./base/conversation.service.base";

@Injectable()
export class ConversationService extends ConversationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
