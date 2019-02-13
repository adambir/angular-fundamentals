import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../shared/event.model';


@Component({
  selector: 'event-detail',
  templateUrl : 'event-detail.component.html',
  styles : ['.event-image {height: 100px; }']
})


export class EventDetailComponent implements OnInit {
  event: IEvent
  constructor(private eventService: EventService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
  }
}
