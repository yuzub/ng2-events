import { CreateEventComponent } from "./create-event.component";

export var checkDirtyState = function checkDirtyState(component: CreateEventComponent) {
  console.log('checkDirtyState started');
  // return false;

    if (component.isDirty) return confirm('You have not saved this event, do you really want to cancel?')
    return true;
}
