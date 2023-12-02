import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <footer>
      <p>© Copyright - 2023 - Todos os direitos reservados</p>
    </footer>
  `,
    styles: [
        `
    footer {
      background-color: #333;
      color: #fff;
      padding: 5px;
      text-align: left;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    `
    ]
})
export class FooterComponent { }
