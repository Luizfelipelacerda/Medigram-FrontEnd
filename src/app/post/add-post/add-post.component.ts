import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  selectedImg: File = null;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    console.log(event);
    this.selectedImg = <File> event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload=(e:any)=>{
      this.selectedImg = e.target.result;
    }
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedImg,this.selectedImg.name)
    this.http.post("http://localhost:8080/imagem", fd)
    .subscribe(res => {
      console.log(res);
    });
  }


}
