import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repos/repo.service';
import { Observable } from 'rxjs/Observable';
import { Repo } from '../repos/repo.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    title = 'Project Repositories';
  errorMessage: string;
  repos: Observable<Repo[]>;
 // start button control
  public isCollapsed: boolean = false;
  public customClass: string = 'customClass';
  // end button control
  constructor(private repoService: RepoService) {
    this.getRepos();
  }

  getRepos(): void {
    this.repoService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
    console.log(this.repos);
  }

}
