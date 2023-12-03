import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  constructor(
    public activeModal: NgbActiveModal,
  ) {
  }

  filter: string = '';

  onFilterChanged(filter: string) {
    this.filter = filter;
  }

  onCardSelected(card: any) {
    this.activeModal.close({
      'name': card.name,
      'multiverseid': card.multiverseid,
      'count': 1
    });
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cancelar');
  }

}
