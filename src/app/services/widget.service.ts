import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Widget, Machine, Size } from '../widget';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private widgetsUrl = `${environment.api_root}/widgets`;
  private machinesUrl = `${environment.api_root}/machines`;
  private sizesUrl = `${environment.api_root}/sizes`;

  constructor(
    private http: HttpClient
  ) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    };
  }

  getWidgets(): Observable<Widget[]> {
    const url = `${this.widgetsUrl}.json`
    return this.http.get<Widget[]>(url)
      .pipe(
        tap(widgets => console.log('fetched widgets', widgets)),
        catchError(this.handleError('getWidgets', []))
      );
  }

  addWidget(widget: Widget): Observable<Widget> {
    const url = `${this.widgetsUrl}.json`
    return this.http.post<Widget>(url, widget, httpOptions)
      .pipe(
        tap((widget: Widget) => console.log(`added widget w/ id=${widget.id}`)),
        catchError(this.handleError<Widget>('addWidget'))
      )
  }

  updateWidget(widget: Widget): Observable<any> {
    const url = `${this.widgetsUrl}/${widget.id}.json`;
    return this.http.put(url, widget, httpOptions)
      .pipe(
        tap(_ => console.log(`updated widget id=${widget.id}`, widget)),
        catchError(this.handleError<any>('updateWidget'))
      )
  }

  getMachines(): Observable<Machine[]> {
    const url = `${this.machinesUrl}.json`
    return this.http.get<Machine[]>(url)
      .pipe(
        tap(machines => console.log('fetched machines')),
        catchError(this.handleError('getMachines', []))
      );
  }

  getSizes(): Observable<Size[]> {
    const url = `${this.sizesUrl}.json`
    return this.http.get<Size[]>(url)
      .pipe(
        tap(sizes => console.log('fetched sizes')),
        catchError(this.handleError('getSizes', []))
      );
  }
}
