import { Component, Input, OnInit } from '@angular/core';

import 'clipboard';

import 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-lua';

declare var Prism: any;

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.scss'],
})
export class CodeblockComponent implements OnInit {
  @Input() code!: string;
  @Input() language = 'lua';
  codeBlock = '';

  ngOnInit(): void {
    let code = this.code;
    code = Prism.plugins.NormalizeWhitespace.normalize(code);
    code = Prism.highlight(code, Prism.languages[this.language]);
    this.codeBlock = code;
  }
}
