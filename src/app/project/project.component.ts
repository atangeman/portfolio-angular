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

  getRepos(repoUrl: string): void {
    this.repoService.getRepoReadme(repoUrl).subscribe(proj => {
      this.markdownSrc = atob(proj.content);
      console.log(proj);
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params["name"]; // cast to number
      this.getRepos(this.name);
    });
  }

  ngOnDestroy() {
    if (this.route) this.sub.unsubscribe();
  }
}
