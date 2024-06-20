import * as graphql from "@nestjs/graphql";
import { CallResolverBase } from "./base/call.resolver.base";
import { Call } from "./base/Call";
import { CallService } from "./call.service";

@graphql.Resolver(() => Call)
export class CallResolver extends CallResolverBase {
  constructor(protected readonly service: CallService) {
    super(service);
  }
}
