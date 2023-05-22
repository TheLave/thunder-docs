import { Component } from '@angular/core';
import { nuicallbacks } from 'src/models/nuicallbacks';

@Component({
  selector: 'app-nuicallbacks',
  templateUrl: './nuicallbacks.component.html',
  styleUrls: ['./nuicallbacks.component.scss'],
})
export class NuicallbacksComponent {
  code = nuicallbacks;
}
