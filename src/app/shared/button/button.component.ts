import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input('color') _color?: string = 'primary';
  @Input() full?: boolean;
  @Input() enabled: boolean = true;
  @Input() iconColor?: string;
  @Input() icon?: string;
  @Output('onClick') _onClick = new EventEmitter();

  get color() {
    if (this._color === 'primary' || this._color === 'secondary') {
      return this._color;
    }
    return null;
  }

  get classes() {
    let classes = [];
    let color = this.color;
    if (color) {
      classes.push(color);
    }
    if (this.full) {
      classes.push('full');
    }
    return classes;
  }

  onClick() {
    this._onClick.emit();
  }
}
