import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../events/shared/event.service";

@Injectable()
export class EventDetailActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists)
      this.router.navigate(['/404']);

    return eventExists;
  }
}
