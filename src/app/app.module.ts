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

import { ProjectComponent } from './project/project.component';

import { routing, appRoutingProviders } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    MarkdownModule.forRoot(),
    routing
  ],
  exports: [ HttpModule ],
  providers: [RepoService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
