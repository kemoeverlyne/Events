import { EventOrganizer as TEventOrganizer } from "../api/eventOrganizer/EventOrganizer";

export const EVENTORGANIZER_TITLE_FIELD = "firstname";

export const EventOrganizerTitle = (record: TEventOrganizer): string => {
  return record.firstname || record.id;
};
