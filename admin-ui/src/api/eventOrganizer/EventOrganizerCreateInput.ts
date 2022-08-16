import { TicketCreateNestedManyWithoutEventOrganizersInput } from "./TicketCreateNestedManyWithoutEventOrganizersInput";

export type EventOrganizerCreateInput = {
  bankAccount?: number | null;
  firstname?: string | null;
  lastname?: string | null;
  phoneNumber?: number | null;
  tickets?: TicketCreateNestedManyWithoutEventOrganizersInput;
};
