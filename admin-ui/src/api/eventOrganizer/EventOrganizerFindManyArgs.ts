import { EventOrganizerWhereInput } from "./EventOrganizerWhereInput";
import { EventOrganizerOrderByInput } from "./EventOrganizerOrderByInput";

export type EventOrganizerFindManyArgs = {
  where?: EventOrganizerWhereInput;
  orderBy?: Array<EventOrganizerOrderByInput>;
  skip?: number;
  take?: number;
};
