import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

import { appROUTES } from './routes';
import { EventDetailActivatorService } from './event-details/event-detail-activator.service';
import { checkDirtyState } from './events/check-ditry-state';
import { EventListResolverService } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent, EventDetailsComponent, CreateEventComponent, Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appROUTES),
    NgbModule.forRoot()
  ],
  providers: [EventService, ToastrService,
    EventDetailActivatorService, EventListResolverService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function checkDirtyState(component: CreateEventComponent) {
//   console.log('checkDirtyState started');
//   // return false;

//     if (component.isDirty) return confirm('You have not saved this event, do you really want to cancel?')
//     return true;
// }
