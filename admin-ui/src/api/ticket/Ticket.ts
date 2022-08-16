import { EventOrganizer } from "../eventOrganizer/EventOrganizer";

export type Ticket = {
  createdAt: Date;
  eventId?: EventOrganizer | null;
  id: string;
  updatedAt: Date;
};
