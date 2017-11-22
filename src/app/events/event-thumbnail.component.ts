import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./shared/event.model";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="card" style="width: 20rem;" [routerLink]="['/events', event.id]">
    <div class="card-body">
      <h4 class="card-title">{{ event.name }}</h4>
      <div class="card-text">
        <div>Date: {{event?.date}}</div>

        <!-- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time"> -->
        <!-- <div  [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time"> -->

        <div class="padded" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div [hidden]="!event?.location">
          <span>Location: {{event?.location?.address}}</span>
          <span>&nbsp;</span>
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event.onlineUrl">
          Online URL: {{event?.onlineUrl}}
        </div>
      </div>
    </div>
    <!--
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
    -->
  </div>
  <button class="btn btn-primary" (click)="handleClickMe()">Click me</button>
  `,
  styles: [`
    .padded: { padding: 20px;}
    .green: {color: #003300 !important;}
    .bold: {font-weight: bold;}
    .pad-left: {margin-left: 10px;}
    .card {min-height: 210px; margin: 10px 0px;}
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  someProperty: string = 'some value';

  handleClickMe() {
    console.log('clicked!');
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo');
  }

  getStartTimeClass() {
    // var 1
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {
    //   green: isEarlyStart,
    //   bold: isEarlyStart
    // };

    // var 2
    // if (this.event && this.event.time === '8:00 am')
    //   return 'green bold';
    // return '';

    // var 3
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    return [];
  }
}
