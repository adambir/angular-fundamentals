import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: ` <div [routerLink]="['/event',event?.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div [ngSwitch]="event?.time">
      Heure: {{event?.time}}
      <span *ngSwitchCase="'8:00 AM'">(Début tôt)</span>
      <span *ngSwitchCase="'10:00 AM'">(Début tardif)</span>
      <span *ngSwitchDefault>(Début normal)</span>
    </div>
    <div>Prix: \${{event.price}}</div>
    <div *ngIf="event?.location">
      <span>Adresse: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <div *ngIf="event?.onlineURL">
      URL: {{event.onlineURL}}
    </div>
  </div>`
})

export class EventThumbnailComponent {
 @Input() event: IEvent;


}
