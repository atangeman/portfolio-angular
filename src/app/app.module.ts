import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RepoService }  from './repos/repo.service';

import { Repo }  from './repos/repo.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [ HttpModule ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
