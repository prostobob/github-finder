import { Injectable } from '@angular/core';

import { ApiResponse, IUser } from '../models/user.interface';
import { Repo } from '../models/repo.interface';

@Injectable()
export class NormalizeService {
  convertUser(res: ApiResponse): IUser {
    console.log(res);
    const user = {
      name: res.items[0].login,
      avatar: res.items[0].avatar_url,
      link: res.items[0].html_url
    };
    return user;
  }

  convertRepos(res): Repo[] {
    return res.map(item => {
        return {
            id: item.id,
            name: item.name,
            url: item.html_url
        };
    });
  }
}
