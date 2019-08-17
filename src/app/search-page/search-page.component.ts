import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IUser } from '../models/user.interface';

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

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      name: ['']
    });

    this.valueChanges = this.searchForm
    .get('name')
    .valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe((name: string) => {
      console.log(name);
      if (name) {
        console.log(name);
        this.user$ = this.userService.getUser(name);
      }
    });
  }

  getUser() {
  }
}
