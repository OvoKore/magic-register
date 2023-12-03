import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from 'src/app/modal/add-card/add-card.component';

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

    constructor(
        private modalService: NgbModal,
        private route: ActivatedRoute
    ) { }

    collectionId: string | null = null;

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.collectionId = params['id'];
        });
    }

    cards = [
        { name: "Yuriko, the Tiger's Shadow", multiverseid: "450653", count: 1 },
        { name: "Najeela, the Blade-Blossom", multiverseid: "446030", count: 1 },
        { name: "Mox Emerald", multiverseid: "630", count: 1 },
        { name: "Mox Jet", multiverseid: "629", count: 1 },
        { name: "Mox Pearl", multiverseid: "631", count: 1 },
    ];

    openAddCardModal() {
        const modalRef = this.modalService.open(AddCardComponent, { centered: true });
        modalRef.result.then((card) => {
            console.log(card)
            console.log(this.cards)
            const foundCard = this.cards.find((c: any) => c.multiverseid === card.multiverseid);
            if (foundCard) {
                foundCard.count += 1;
            }
            else {
                this.cards.push(card);
            }
        }, (reason) => {
        });
    }

    changeQuantity(card: any, amount: number) {
        const foundCard = this.cards.find((c: any) => c.multiverseid === card.multiverseid);
        if (foundCard) {
            foundCard.count += amount;
            if (foundCard.count == 0) {
                this.deleteCard(foundCard);
            }
        }
    }

    deleteCard(card: any) {
        const index = this.cards.findIndex((c: any) => c.multiverseid === card.multiverseid);
        if (index !== -1) {
            this.cards.splice(index, 1);
        }
    }
}
