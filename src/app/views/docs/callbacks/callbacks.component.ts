import { Component } from '@angular/core';
import { callbacks } from 'src/models/callbacks';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.scss'],
})
export class CallbacksComponent {
  code = callbacks;
}
