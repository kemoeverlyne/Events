import { Module } from "@nestjs/common";
import { EventOrganizerModuleBase } from "./base/eventOrganizer.module.base";
import { EventOrganizerService } from "./eventOrganizer.service";
import { EventOrganizerController } from "./eventOrganizer.controller";
import { EventOrganizerResolver } from "./eventOrganizer.resolver";

@Module({
  imports: [EventOrganizerModuleBase],
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService, EventOrganizerResolver],
  exports: [EventOrganizerService],
})
export class EventOrganizerModule {}
