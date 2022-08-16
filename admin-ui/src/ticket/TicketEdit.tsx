import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventOrganizerTitle } from "../eventOrganizer/EventOrganizerTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventorganizer.id"
          reference="EventOrganizer"
          label="Event_id"
        >
          <SelectInput optionText={EventOrganizerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
