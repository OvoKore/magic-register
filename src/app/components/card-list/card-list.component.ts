import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MagicApiService } from '../../services/mtg.service';

@Component({
  selector: 'app-card-list',
  template: `
    <div *ngFor="let card of cards">
      <p><b>{{ card.name }}</b></p>
      <img [src]="card.imageUrl" alt="{{ card.name }}">
    </div>
  `
})
export class CardListComponent implements OnChanges {
  @Input() filter: any = '';
  cards: any[] = [];

  constructor(private magicApiService: MagicApiService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter']) {
      if (this.filter) {
        this.magicApiService.getCards(this.filter).subscribe(data => {
          const uniqueNames = new Set<string>();
          this.cards = data.cards.filter((card: any) => {
            if (card.imageUrl && !uniqueNames.has(card.name)) {
              uniqueNames.add(card.name);
              return true;
            }
            return false;
          });
        });
      }
    }
  }
}
