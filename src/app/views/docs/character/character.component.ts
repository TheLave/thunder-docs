import { Component } from '@angular/core';
import { character } from 'src/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  code = character;
}
