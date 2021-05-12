import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:3001/students';

  constructor(private httpClient: HttpClient) { }

  listStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<Student[], any> {
    throw new Error('Method not implemented.');
  }
}
