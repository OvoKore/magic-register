import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddCollectionDialog } from "src/app/components/add-collection-dialog/add-collection-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  collections: string[] = ['Coleção 1', 'Coleção 2', 'Coleção 3', 'Coleção 4', 'Coleção 5', 'Coleção 6'];

  constructor(private modalService: NgbModal) { }

  addCollection() {
    const modalRef = this.modalService.open(AddCollectionDialog, { size: 'sm' });

    modalRef.result.then((result: string) => {
      if (result) {
        this.collections.push(result);
      }
    }).catch(() => {
      console.log('Modal fechado sem adição de coleção');
    });
  }

  deleteCollection(collection: string) {
    console.log('Excluir coleção:', collection);
  }
}
