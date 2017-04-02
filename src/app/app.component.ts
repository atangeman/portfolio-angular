import { Component } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor (private repoService: RepoService) {
	  this.getRepos();
  }
  
  getRepos() {
    var repos = this.repoService.getRepos();
	console.log(repos);
  }
}
