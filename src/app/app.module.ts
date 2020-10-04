import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RepoService } from './repos/repo.service';

import { GistsService } from './gists/gists.service';

import { Repo } from './repos/repo.model';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

import { Event } from '@angular/router';

import { MarkdownModule } from 'angular2-markdown';

import { ProjectComponent } from './project/project.component';

import { routing, appRoutingProviders } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SlideshowComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    MarkdownModule.forRoot(),
    routing
  ],
  exports: [HttpModule],
  providers: [RepoService, GistsService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
