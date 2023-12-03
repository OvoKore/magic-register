import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCollectionComponent } from '../../modal/add-collection/add-collection.component';
import { Collection } from 'src/app/interface/Collection';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private storageService: StorageService
  ) { }

  collections: Collection[] = [];
  id = 1;

  ngOnInit() {
    this.collections = this.storageService.getCollections();
    const maxId = this.collections.reduce((max, collection) => {
      return collection.id > max ? collection.id : max;
    }, 0);
    this.id = maxId + 1;
  }

  openAddCollectionModal() {
    const modalRef = this.modalService.open(AddCollectionComponent, { centered: true });
    modalRef.result.then((result) => {
      this.collections.push({
        id: this.id,
        name: result,
        cards: []
      });
      this.storageService.saveCollections(this.collections);
      this.id += 1;
    }, (reason) => {
    });
  }

  deleteCollection(collection: any) {
    this.storageService.deleteCollection(collection);
    this.collections = this.storageService.getCollections();
  }
}
