import {Component, Input} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Heure: {{event.time}}</div>
    <div>Prix: \${{event.price}}</div>
    <div>
      <span>Adresse: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>`
})

export class EventThumbnailComponent {
 @Input() event: any
}
