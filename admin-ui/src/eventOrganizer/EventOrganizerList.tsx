import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventOrganizerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Event organizers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bank account" source="bankAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Firstname " source="firstname" />
        <TextField label="ID" source="id" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Phone number" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
