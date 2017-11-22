import { Component, OnInit } from "@angular/core";

import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/event.model";

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  events: IEvent;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.events = this.eventService.getEvents();
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    console.log('Received: ' + data);
  }

  handleThumbnailClick(eventName) {
    // toastr.success(eventName);
    this.toastr.success(eventName);

  }
}
