import { Component } from "@angular/core";

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

    currentFilter: string = '';

    onFilterChanged(filter: string) {
        this.currentFilter = filter;
    }
}