import { Component } from '@angular/core';
import { player } from 'src/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  code = player;
}
