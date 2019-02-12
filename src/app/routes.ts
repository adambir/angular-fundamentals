import {EventListComponent} from './event/event-list.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {CreateEventComponent} from './event/shared/create-event.component';

export const appRoutes = [
  {path: 'events', component: EventListComponent},
  {path: 'event/new', component: CreateEventComponent},
  {path: 'event/:id', component: EventDetailComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}

]
