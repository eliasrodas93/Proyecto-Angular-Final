import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'contact-us', component: ContactFormComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'post/:id', component: PostsComponent},
  {path: 'create-post', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
