import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Repo } from './repo.model';

@Injectable()
export class RepoService {
	private reposUrl = 'https://api.github.com/users/atangeman/repos';
	
	constructor (private http: Http) {}
	
	getRepos() {
		return this.http.get(this.reposUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let body = res.json();
		for (var key in body)
		{
			if (body.hasOwnProperty(key)) {
				console.log(key + " -> " + body[key]);
			}
		}
		return body || { };
	}
	
	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
  }
}
