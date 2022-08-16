import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstname?: SortOrder;
  id?: SortOrder;
  lastname?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
