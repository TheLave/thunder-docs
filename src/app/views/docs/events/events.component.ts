import { Component } from '@angular/core';
import { events } from 'src/models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  code = events;
}
