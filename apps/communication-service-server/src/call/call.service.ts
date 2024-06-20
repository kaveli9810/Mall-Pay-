import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CallServiceBase } from "./base/call.service.base";

@Injectable()
export class CallService extends CallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
