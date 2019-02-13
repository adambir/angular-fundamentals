import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'event-list',
  template: `
<div>
  <h1>Prochains évènements Angular</h1>
  <hr>
  <div class="row">
    <div  *ngFor="let event of events"  class="col-md-5">
      <event-thumbnail (click)="handleClick(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>
</div>`
  }
)

export class EventListComponent implements OnInit {
 events: any;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  handleClick(name: string) {
    this.toastr.success(name);
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }


}
