import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RepoService } from '../repos/repo.service';
import { Observable } from 'rxjs/Observable';
import { Repo } from '../repos/repo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit, OnDestroy {
  projectRepo: Observable<Object>;
  private name: string;
  private sub: any;
  public markdownSrc = '### test';

  constructor(private route: ActivatedRoute, private repoService: RepoService) {
  }

  async getRepos(repoName: string): Promise<void> {
      this.repoService.getRepoReadme(repoName)
                      //.catch(this.handleError)
                      .subscribe(proj => {
        this.markdownSrc = atob(proj.content);
        //console.log(proj);
        });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params["name"]; // cast to number
      this.getRepos(this.name)
          //.catch(this.handleError)
    });
  }

  ngOnDestroy() {
    if (this.route) this.sub.unsubscribe();
  }

  handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		errMsg = error.message ? error.message : error.toString();
		console.error(errMsg);
		return Observable.throw(errMsg);
  }
}
