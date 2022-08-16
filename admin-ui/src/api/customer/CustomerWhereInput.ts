import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
};
