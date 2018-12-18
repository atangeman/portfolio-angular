import { Component } from '@angular/core';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  environmentName = environment.envName;
}
