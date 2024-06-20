import { Module } from "@nestjs/common";
import { CallModuleBase } from "./base/call.module.base";
import { CallService } from "./call.service";
import { CallController } from "./call.controller";
import { CallResolver } from "./call.resolver";

@Module({
  imports: [CallModuleBase],
  controllers: [CallController],
  providers: [CallService, CallResolver],
  exports: [CallService],
})
export class CallModule {}
