import { Component, OnInit } from "@angular/core";

import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('Received: ' + data);
  }

  handleThumbnailClick(eventName) {
    // toastr.success(eventName);
    this.toastr.success(eventName);

  }
}
