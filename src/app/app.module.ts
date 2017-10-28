import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { DataService } from './services/data.service';
import { AboutService } from './services/about.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    SidenavComponent,
    PostsComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
