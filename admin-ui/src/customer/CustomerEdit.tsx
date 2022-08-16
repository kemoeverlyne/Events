import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Firstname" source="firstname" />
        <TextInput label="Lastname" source="lastname" />
        <NumberInput step={1} label="Phone number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
