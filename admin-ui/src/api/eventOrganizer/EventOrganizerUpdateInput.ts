import { TicketUpdateManyWithoutEventOrganizersInput } from "./TicketUpdateManyWithoutEventOrganizersInput";

export type EventOrganizerUpdateInput = {
  bankAccount?: number | null;
  firstname?: string | null;
  lastname?: string | null;
  phoneNumber?: number | null;
  tickets?: TicketUpdateManyWithoutEventOrganizersInput;
};
