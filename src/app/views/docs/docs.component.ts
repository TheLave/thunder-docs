import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  get route() {
    return this.router.url;
  }

  get routeLabel() {
    let url = this.router.url;
    if (url === '/docs') {
      return 'Documentation';
    }
    url = url.replace('/docs/', '');
    return url.charAt(0).toUpperCase() + url.slice(1);
  }

  constructor(private router: Router) {}
}
