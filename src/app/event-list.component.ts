import {Component} from '@angular/core';

@Component({
  selector: 'event-list',
  template: `
<div>
    <h1>Prochains évènements Angular</h1>
    <hr>
    <event-thumbnail [event]="event1"></event-thumbnail>
  </div>`
  }
)

export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '18/06/2020',
    time: '10:45',
    price: 599.99,
    imageUrl: 'src/assets/img/angularconnect-shield.png',
    location: {
      address: '145 Quai de Valmy',
      city: 'Paris',
      country: 'France'
    }
  }
}
