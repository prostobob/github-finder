import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';
import { IUser } from '../models/user.interface';
import { Repo } from '../models/repo.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchParam = '';
  valueChanges: Subscription;
  user$: Observable<IUser>;
  searchForm: FormGroup;
  repos$: Observable<Repo[]>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      name: ['']
    });

    this.route.paramMap.subscribe(data => {
      if (data.get('name')) {
        this.searchForm.patchValue({
          name: data.get('name')
        });
        this.getData(data.get('name'));
      }
    });

    this.nameChanges();
  }

  private nameChanges() {
    this.valueChanges = this.searchForm
      .get('name')
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((name: string) => {
        if (name) {
          this.getData(name);
        }
      });
  }

  private getData(name: string) {
    this.user$ = this.userService.getUser(name);
    this.repos$ = this.userService.getRepos(name);
  }
}
