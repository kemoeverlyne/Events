import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";

export type TicketCreateInput = {
  eventId?: EventOrganizerWhereUniqueInput | null;
};
