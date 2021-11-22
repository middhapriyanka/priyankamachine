import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Status } from '../enum/status.enum';

import { CustomResponse } from '../interface/custom-response';
import { Server } from '../interface/server';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private readonly apiUrl ='http://localhost:8080';
  constructor(private http: HttpClient) {}

  servers$ = <Observable<CustomResponse>>(
    this.http
      .get<CustomResponse>(`${this.apiUrl}/server/list`)
      .pipe(tap(console.log), catchError(this.handleError))
  );

  save$ = (server: Server) =><Observable<CustomResponse>>(
    this.http
      .post<CustomResponse>(`${this.apiUrl}/server/save`, server)
      .pipe(tap(console.log), catchError(this.handleError))
  );

  ping$ = (ipAddress: string) =><Observable<CustomResponse>>(
    this.http
      .get<CustomResponse>(`${this.apiUrl}/server/ping/${ipAddress}`)
      .pipe(tap(console.log), catchError(this.handleError))
  );

  delete$ = (serverId: number) =><Observable<CustomResponse>>(
    this.http
      .delete<CustomResponse>(`${this.apiUrl}/server/ping/${serverId}`)
      .pipe(tap(console.log), catchError(this.handleError))
  );
  /*filter$ = (status: Status, response: CustomResponse) =><Observable<CustomResponse>>(
    new Observable<CustomResponse>(
      subscriber =>{
        console.log(response);
        subscriber.next(
          status === Status.ALL? {...response, message}
        )
      }
    )
    .pipe(tap(console.log), catchError(this.handleError))
  );*/

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occured - Error code: ${error.status}`);
  }
}
