import { Component, Input } from '@angular/core';
import { ThunderModule } from 'src/models/ThunderModule';

@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss'],
})
export class CodeSectionComponent {
  @Input() code!: ThunderModule;
  @Input() language = 'lua';
  searchTerm: string = '';

  get filteredClientFunctions() {
    if (this.code.client) {
      return Object.keys(this.code.client)
        .filter((key) =>
          key.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .reduce((obj: { [key: string]: string }, key: string) => {
          obj[key] = this.code.client![key];
          return obj;
        }, {});
    }

    return {};
  }

  get filteredServerFunctions() {
    if (this.code.server) {
      return Object.keys(this.code.server)
        .filter((key) =>
          key.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .reduce((obj: { [key: string]: string }, key: string) => {
          obj[key] = this.code.server![key];
          return obj;
        }, {});
    }

    return {};
  }

  hasChildren(object: Object) {
    return Object.keys(object).length > 0;
  }
}
