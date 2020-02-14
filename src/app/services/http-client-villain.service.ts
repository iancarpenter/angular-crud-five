import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Villain } from '../classes/villain';
import { VillainsService } from './villain.service';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable()

export class HttpClientVillainService extends VillainsService {
  
  constructor(private http: HttpClient) {
    super();
   }

  getVillains(): Observable<Villain[]> {    
    return this.http.get<Villain[]>(this.villainsUrl).pipe(
      catchError(this.handleError)
    );
  }

  // get by id - will 404 when id not found
  getVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.get<Villain>(url).pipe(
      catchError(this.handleError)
    );
  }

  addVillain(id: number, name: string, episode: string): Observable<Villain> {
    
    const villain = { id, name, episode };
    
    return this.http.post<Villain>(this.villainsUrl, villain, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteVillain(villain: number | Villain): Observable<Villain> {
    const id = typeof villain === 'number' ? villain : villain.id;
    const url = `${this.villainsUrl}/${id}`;

    return this.http.delete<Villain>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  searchVillain(term: string): Observable<Villain[]> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ?
    { params: new HttpParams().set('name', term)} : {};

    return this.http.get<Villain[]>(this.villainsUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  updateVillain(villain: Villain): Observable<Villain> {
    return this.http.put<Villain>(this.villainsUrl, villain, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }

}
