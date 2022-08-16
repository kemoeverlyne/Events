import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EventOrganizerResolverBase } from "./base/eventOrganizer.resolver.base";
import { EventOrganizer } from "./base/EventOrganizer";
import { EventOrganizerService } from "./eventOrganizer.service";

@graphql.Resolver(() => EventOrganizer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EventOrganizerResolver extends EventOrganizerResolverBase {
  constructor(
    protected readonly service: EventOrganizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
