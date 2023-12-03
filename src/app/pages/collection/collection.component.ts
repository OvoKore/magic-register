import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from 'src/app/modal/add-card/add-card.component';
import { Collection } from 'src/app/interface/Collection';
import { Card } from 'src/app/interface/Card';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

    constructor(
        private modalService: NgbModal,
        private route: ActivatedRoute,
        private router: Router,
        private storageService: StorageService
    ) { }

    collectionId: number = 0;
    title = '';
    collections: Collection[] = [];
    cards: Card[] = [];

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.collectionId = params['id'];
        });
        this.collections = this.storageService.getCollections();
        const findCollection = this.storageService.findCollection(this.collectionId);
        if (findCollection) {
            this.cards = findCollection.cards;
            this.title = findCollection.name;
        }
        else {
            this.router.navigateByUrl('/');
        }
    }

    openAddCardModal() {
        const modalRef = this.modalService.open(AddCardComponent, { centered: true });
        modalRef.result.then((card) => {
            const foundCard = this.cards.find((c: Card) => c.multiverseid == card.multiverseid);
            if (foundCard) {
                foundCard.count += 1;
            }
            else {
                this.cards.push(card);
            }
            this.updateCollections();
        }, (reason) => {
        });
    }

    changeQuantity(card: Card, amount: number) {
        const foundCard = this.cards.find((c: Card) => c.multiverseid == card.multiverseid);
        if (foundCard) {
            foundCard.count += amount;
            if (foundCard.count == 0) {
                this.deleteCard(foundCard);
            }
            this.updateCollections();
        }
    }

    deleteCard(card: Card) {
        const index = this.cards.findIndex((c: any) => c.multiverseid == card.multiverseid);
        if (index !== -1) {
            this.cards.splice(index, 1);
            this.updateCollections();
        }
    }

    private updateCollections() {
        const collection = this.storageService.findCollection(this.collectionId);
        collection.cards = this.cards;
        this.collections = this.collections.map(c => {
            if (c.id == this.collectionId) {
                return { ...collection };
            }
            return c;
        });
        this.storageService.saveCollections(this.collections);
    }
}
