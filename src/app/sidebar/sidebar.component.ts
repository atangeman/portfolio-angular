import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RepoService } from '../repos/repo.service';
import { Repo } from '../repos/repo.model';

import { GistsService } from '../gists/gists.service';
import { Gist } from '../gists/gist.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  title = 'Project Repositories';
  errorMessage: string;
  repos: Repo[] = [];
  gists: Gist[] = [];
 // start button control
  public isCollapsed: boolean = false;
  public customClass: string = 'customClass';
  // end button control

  constructor(private repoService: RepoService, private gistsService: GistsService) {
    //this.getRepos();
  }

  async getGists(): Promise<void> {
    if (this.gists.length < 1) {
      let gistList = await this.gistsService.getGists();
      for (let gist of gistList) {
        if (this.gists.map(function(e) { return e.id; }).indexOf(gist.id) == -1) {
            this.gists.push(gist);
        }
      }    
    }
  }

  async getRepos(): Promise<void> {
    if (this.repos.length < 1) {
      let repoList = await this.repoService.getRepos();
      for (let repo of repoList) {
        let list: string[] = await this.repoService.getRepoTags(repo.name);
        if (list.indexOf("portfolio") > -1 && 
           (this.repos.map(function(e) { return e.name; }).indexOf(repo.name) == -1)) {
            this.repos.push(repo);
        }
      }    
    }
  }
}
