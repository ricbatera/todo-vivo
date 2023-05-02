import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { catchError, Observable, retry, throwError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tarefa } from '../model/tarefa';


@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  API_URL = environment.URLSERVIDOR;

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  } 

  getAllTarefas(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(`${this.API_URL}all`);
  }

  novaTarefa(payload: Tarefa): Observable<Tarefa> {
    return this.httpClient.post<Tarefa>(`${this.API_URL}new`, JSON.stringify(payload), this.httpOptions)
      // .pipe(retry(2), catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    console.log(error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}