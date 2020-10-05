import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GithubService } from './github.service';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

import { Event } from '@angular/router';

import { MarkdownModule } from 'angular2-markdown';

import { ProjectComponent } from './project/project.component';

import { routing, appRoutingProviders } from './app.routes';
import { HomeComponent } from './home/home.component';
import { GistComponent } from './gists/gist.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SlideshowComponent,
    ProjectComponent,
    HomeComponent,
    GistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    MarkdownModule.forRoot(),
    routing,
    NgxGistModule
  ],
  exports: [HttpModule],
  providers: [GithubService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
