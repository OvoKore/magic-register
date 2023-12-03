import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCollectionComponent } from '../../modal/add-collection/add-collection.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private modalService: NgbModal) { }

  collections: any[] = [
    { id: 1, name: 'Coleção 1' },
    { id: 2, name: 'Coleção 2' },
  ];
  id = 3

  openAddCollectionModal() {
    const modalRef = this.modalService.open(AddCollectionComponent, { centered: true });
    modalRef.result.then((result) => {
      this.collections.push({
        id: this.id,
        name: result
      })
      this.id += 1
    }, (reason) => {
    });
  }

  deleteCollection(collection: any) {
    this.collections = this.collections.filter((item: any) => item.id !== collection.id);
  }
}
