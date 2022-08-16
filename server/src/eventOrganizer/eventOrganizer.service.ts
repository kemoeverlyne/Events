import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EventOrganizerServiceBase } from "./base/eventOrganizer.service.base";

@Injectable()
export class EventOrganizerService extends EventOrganizerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
