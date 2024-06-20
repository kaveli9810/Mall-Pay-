import { CallWhereInput } from "./CallWhereInput";
import { CallOrderByInput } from "./CallOrderByInput";

export type CallFindManyArgs = {
  where?: CallWhereInput;
  orderBy?: Array<CallOrderByInput>;
  skip?: number;
  take?: number;
};
