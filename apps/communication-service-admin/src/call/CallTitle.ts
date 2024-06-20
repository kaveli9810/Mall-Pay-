import { Call as TCall } from "../api/call/Call";

export const CALL_TITLE_FIELD = "id";

export const CallTitle = (record: TCall): string => {
  return record.id?.toString() || String(record.id);
};
