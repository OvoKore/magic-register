import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MagicApiService {
  private apiUrl = 'https://api.magicthegathering.io/v1/cards';

  constructor(private http: HttpClient) {}

  getCards(filter: string): Observable<any> {
    const params = new HttpParams().set('name', filter);
    
    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Erro na requisição:', error);
    return throwError(() => error);
  }
}
