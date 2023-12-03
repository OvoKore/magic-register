import { Injectable } from "@angular/core";
import { Collection } from "../interface/Collection";


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    getCollections(): Collection[] {
        const magicRegisterString = localStorage.getItem('magic-register');
        const collections: Collection[] = JSON.parse(magicRegisterString!);
        return collections;
    }

    findCollection(collectionId: number): Collection {
        const collections: Collection[] = this.getCollections();
        const foundCollection = collections.find((c) => c.id == collectionId);
        return foundCollection!;
    }

    saveCollections(collections: Collection[]) {
        localStorage.setItem('magic-register', JSON.stringify(collections));
    }

    deleteCollection(collection: Collection) {
        const collections = this.getCollections().filter((item: any) => item.id != collection.id);
        localStorage.setItem('magic-register', JSON.stringify(collections));
    }
}