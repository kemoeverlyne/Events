import { EventOrganizerWhereUniqueInput } from "../eventOrganizer/EventOrganizerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TicketWhereInput = {
  eventId?: EventOrganizerWhereUniqueInput;
  id?: StringFilter;
};
