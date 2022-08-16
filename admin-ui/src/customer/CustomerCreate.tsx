import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Lastname" source="lastname" />
        <NumberInput step={1} label="Phone number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
