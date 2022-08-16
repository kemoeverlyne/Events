import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventOrganizerWhereInput = {
  bankAccount?: FloatNullableFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
  tickets?: TicketListRelationFilter;
};
