import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IUser, ApiResponse } from '../models/user.interface';
import { NormalizeService } from './normalize.service';
import { Repo } from '../models/repo.interface';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient, private normalizeService: NormalizeService) {}

  getUser(param: string): Observable<IUser> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/search/users?q=${param}`).pipe(
      map(data => {
        return this.normalizeService.convertUser(data);
      })
    );
  }

  getRepos(param: string): Observable<Repo[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/users/${param}/repos`).pipe(
      map( data => {
        return this.normalizeService.convertRepos(data);
      } )
    );
  }
}
