import { Component, OnInit, Input } from '@angular/core';

import { Repo } from '../models/repo.interface';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  @Input() repos: Repo[];

  constructor() { }

  ngOnInit() {

  }

}
