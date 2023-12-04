import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../interface/Collection';

@Injectable({
    providedIn: 'root',
})
export class JsonApiService {
    private apiUrl = 'http://localhost:3000/json-server';

    constructor(private http: HttpClient) { }

    getCollection(collection: Collection): Observable<any> {
        return this.http.get(`${this.apiUrl}/collections/${collection.id}`);
    }
    
    postCollection(collection: Collection): Observable<any> {
        return this.http.post(`${this.apiUrl}/collections`, collection);
    }

    putCollection(collection: Collection): Observable<any> {
        return this.http.put(`${this.apiUrl}/collections/${collection.id}`, collection);
    }
}