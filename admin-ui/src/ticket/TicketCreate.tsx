import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventOrganizerTitle } from "../eventOrganizer/EventOrganizerTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventorganizer.id"
          reference="EventOrganizer"
          label="Event_id"
        >
          <SelectInput optionText={EventOrganizerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
