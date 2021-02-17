import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post/post.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CommentComponent } from './comment/comment/comment.component';
import { AddPostComponent } from './post/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    CommentComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
