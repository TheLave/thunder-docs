import { Component } from '@angular/core';
import { utils } from 'src/models/utils';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent {
  code = utils;
}
