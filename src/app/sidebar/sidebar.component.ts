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
  repos: Repo[] = [];
 // start button control
  public isCollapsed: boolean = false;
  public customClass: string = 'customClass';
  // end button control
  constructor(private repoService: RepoService) {
    //this.getRepos();
  }

  async getRepos(): Promise<void> {
    let repoList = await this.repoService.getRepos();
    for(let repo of repoList) {
        let list: string[] = await this.repoService.getRepoTags(repo.name);
        if(list.indexOf("portfolio") > -1) {
          this.repos.push(repo);
      }
    }    
  }
}
