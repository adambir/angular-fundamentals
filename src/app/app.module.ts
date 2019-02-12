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
import {CreateEventComponent} from './event/shared/create-event.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
