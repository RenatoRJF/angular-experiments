import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Repository } from './repository';
import repositories from './repository-mock';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  readonly baseURL: string = 'https://api.github.com/repos/';

  readonly HTTP_CONFIG = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllRepositories(): Repository[] {
    return repositories; //Mock list of repositories
  }

  getRepository(ownerRepo): Observable<Repository> {
    return this.http.get<Repository>(this.baseURL + ownerRepo);
  }
}
