import { Component } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  errorMessage: string;
  repos: {};
  
  constructor (private repoService: RepoService) {
	  this.getRepos();
  }
  
  getRepos() {
    this.repoService.getRepos().subscribe(repos => this.repos = <any>repos,
								error =>  this.errorMessage = <any>error);
	console.log(this.repos);
  }
}
