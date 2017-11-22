import { Routes } from '@angular/router';
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailActivatorService } from './event-details/event-detail-activator.service';
import { EventListResolverService } from './events/event-list-resolver.service';

export const appROUTES: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];
