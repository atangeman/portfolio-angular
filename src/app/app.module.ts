import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RepoService }  from './repos/repo.service';

import { Repo }  from './repos/repo.model';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  exports: [ HttpModule ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
