import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalsService {
    BASE_URL: string = 'http://localhost:3000/api';

  constructor(
    private http:Http
  ) { }

getAll(){
  return this.http.get(`${this.BASE_URL}/journal-entries`)
  .map((res) => res.json());
}

get(id) {
  return this.http.get(`${this.BASE_URL}/entries/${id}`)
    .map((res) => res.json());
}

}
