import { Component } from '@angular/core';
import { RepoService } from './repos/repo.service';
import { Observable } from 'rxjs/Observable';
import { Repo } from './repos/repo.model';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Repositories';
  errorMessage: string;
  repos: Observable<Repo[]>;
  numbers: string[];
 // start button control
  public isCollapsed: boolean = false;

  // end button control
  constructor(private repoService: RepoService) {
    this.numbers = Array.from(Array(100),(x,i)=>String(i+1));
    this.getRepos();
  }

  getRepos(): void {
    this.repoService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
    console.log(this.repos);
  }
}
