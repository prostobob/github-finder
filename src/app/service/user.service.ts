import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IUser, UserResponse } from '../models/user.interface';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com/search/';

  constructor(private http: HttpClient) {}

  getUser(param: string): Observable<IUser> {
    return this.http.get<UserResponse>(`${this.apiUrl}users?q=${param}`).pipe(
      map(data => {
        return {
          name: data.items[0].login,
          avatar: data.items[0].avatar_url,
          link: data.items[0].html_url
        };
      })
    );
  }

  getRepos(param: string): Observable<any> {
    return this.http.get<UserResponse>(`${this.apiUrl}repositories?q=${param}`);
  }
}
