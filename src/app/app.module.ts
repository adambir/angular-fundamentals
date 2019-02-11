import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import {EventListComponent} from './event-list.component';
import {EventThumbnailComponent} from './event-thumbnail.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
