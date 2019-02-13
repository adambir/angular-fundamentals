import {EventListComponent} from './event/event-list.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {CreateEventComponent} from './event/create-event.component';
import {ErrorComponent} from './errors/404.component';
import {EventRouteActivatorService} from './event/event-detail/event-route-activator.service';
import {EventListResolver} from './event/event-list-resolver.service';


export const appRoutes = [
  {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
  {path: 'event/new', component: CreateEventComponent},
  {path: 'event/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService]},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '404', component: ErrorComponent},
  {path: 'user', loadChildren: './user/user.module#UserModule'}

];
