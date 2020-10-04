import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GistsService {
	private rootApi = 'https://api.github.com/'
	private gistsUrl = this.rootApi + 'users/atangeman/gists';
	private gistUrl = this.rootApi + 'gists/atangeman/';
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
