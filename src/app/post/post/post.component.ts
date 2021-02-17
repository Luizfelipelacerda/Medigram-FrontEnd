import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: Post = {
    id: 999,
    userName: "fulano",
    userImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
    postTxt: `Lorem Ipsum as their 
    default model text, and a search for 'lorem ipsum' will uncover many web sites still
    in their infancy. Packages and web page editors now use Lorem Ipsum as their
    default model text.`,
    postImg: "../../../assets/images/dmc5wallpaper.jpg",
    date: "10-02-2021",
  };
  constructor() { }

  ngOnInit(): void {}

}
