import { Component, OnInit } from '@angular/core';
import { Post } from '../app/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'medigramapp';

  // public posts: Post[];

  ngOnInit(){
    this.addPosts();
  }

  public addPosts():void{
    // this.posts.push({
    //   id: 999,
    //   userName: "fulano",
    //   userImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
    //   postTxt: `Lorem Ipsum as their 
    //   default model text, and a search for 'lorem ipsum' will uncover many web sites still
    //   in their infancy. Packages and web page editors now use Lorem Ipsum as their
    //   default model text.`,
    //   postImg: "https://store-images.s-microsoft.com/image/apps.14704.67980834390914492.12ed9840-6570-4b28-8c1a-145f4fc183b5.8f42a7aa-682c-448a-bfce-23dcc32dbadf?mode=scale&q=90&h=1080&w=1920",
    //   date: "10-02-2021"
    // },{
    //   id: 333,
    //   userName: "siclano",
    //   userImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
    //   postTxt: `Lorem Ipsum as their 
    //   default model text, and a search for 'lorem ipsum' will uncover many web sites still
    //   in their infancy. Packages and web page editors now use Lorem Ipsum as their
    //   default model text.`,
    //   postImg: "https://store-images.s-microsoft.com/image/apps.14704.67980834390914492.12ed9840-6570-4b28-8c1a-145f4fc183b5.8f42a7aa-682c-448a-bfce-23dcc32dbadf?mode=scale&q=90&h=1080&w=1920",
    //   date: "10-02-2021"
    // },{
    //   id: 222,
    //   userName: "beltrano",
    //   userImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
    //   postTxt: `Lorem Ipsum as their 
    //   default model text, and a search for 'lorem ipsum' will uncover many web sites still
    //   in their infancy. Packages and web page editors now use Lorem Ipsum as their
    //   default model text.`,
    //   postImg: "https://store-images.s-microsoft.com/image/apps.14704.67980834390914492.12ed9840-6570-4b28-8c1a-145f4fc183b5.8f42a7aa-682c-448a-bfce-23dcc32dbadf?mode=scale&q=90&h=1080&w=1920",
    //   date: "10-02-2021"
    // })
  }
}
