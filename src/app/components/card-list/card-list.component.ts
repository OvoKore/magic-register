import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MagicApiService } from '../../services/mtg.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnChanges {
  @Input() filter: any = '';
  @Output() cardSelected = new EventEmitter<any>();
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

  selectCard(card: any) {
    this.cardSelected.emit(card);
  }
}

