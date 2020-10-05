import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'app/github.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit {
  private gistId: string;
  private gistDesc: string;
  private iframe: string;
  private mySubscription: any;

  constructor(private router: Router, private route: ActivatedRoute, private githubService: GithubService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.route.params.subscribe(params => {
      this.gistId = params["id"]; // cast to number
      this.gistDesc = params["desc"];
    });
}

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
