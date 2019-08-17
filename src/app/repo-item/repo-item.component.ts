import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../models/repo.interface';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent implements OnInit {

  @Input() item: Repo;

  constructor() { }

  ngOnInit() {
  }

}
