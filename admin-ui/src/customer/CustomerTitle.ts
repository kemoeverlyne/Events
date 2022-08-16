import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "firstname";

export const CustomerTitle = (record: TCustomer): string => {
  return record.firstname || record.id;
};
