import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  
  private rootApi = 'https://api.github.com/'
	private reposUrl = this.rootApi + 'users/atangeman/repos';
  private repoUrl = this.rootApi + 'repos/atangeman/';
  private gistsUrl = this.rootApi + 'users/atangeman/gists';
	private requestOptions = null;

	constructor (private http: Http) {
		const headerDict = {
			'Content-Type': 'application/json',
			'Accept': 'application/vnd.github.mercy-preview+json'
			}

		const requestOpt = {                                                                                                                                                                                 
			headers: new Headers(headerDict), 
		};

		this.requestOptions = requestOpt;
	}
	
	async getRepos() : Promise<any[]>{
		return this.http.get(this.reposUrl)
			.map(this.extractData)
			.catch(this.handleError)
			.toPromise();
	}
	
	getRepoReadme(name:string) {
		return this.http.get(this.repoUrl + name + '/readme')
			.map(this.extractData)
			.catch(this.handleError);
	}

	async getRepoTags(name:string) : Promise<string[]> {
		const resp = await this.http.get(this.repoUrl + name + '/topics', this.requestOptions)
            .map(this.extractData)
            .catch(this.handleError)
			.toPromise();
		return resp["names"];
	}

  async getGists() : Promise<any[]> {
		return this.http.get(this.gistsUrl)
			.map(this.extractData)
			.catch(this.handleError)
			.toPromise();
  }

	private extractData(res: Response) {
		let body = res.json();
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
