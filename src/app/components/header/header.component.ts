import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <header>
      <h1>Magic register</h1>
    </header>
  `,
    styles: [
        `
    header {
      background-color: #333;
      color: #fff;
      padding: 5px;
      text-align: center;
    }
    `
    ]
})
export class HeaderComponent { }
