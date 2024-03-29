import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventAppComponent} from './event/event-app.component';
import {EventListComponent} from './event/event-list.component';
import {EventThumbnailComponent} from './event/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './event/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './event/create-event.component';
import {ErrorComponent} from './errors/404.component';
import {EventRouteActivatorService} from './event/event-detail/event-route-activator.service';
import {EventListResolver} from './event/event-list-resolver.service';
import {UserModule} from './user/user.module';
import {AuthService} from './user/auth.service';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
