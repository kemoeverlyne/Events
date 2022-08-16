import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventOrganizerService } from "./eventOrganizer.service";
import { EventOrganizerControllerBase } from "./base/eventOrganizer.controller.base";

@swagger.ApiTags("eventOrganizers")
@common.Controller("eventOrganizers")
export class EventOrganizerController extends EventOrganizerControllerBase {
  constructor(
    protected readonly service: EventOrganizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
