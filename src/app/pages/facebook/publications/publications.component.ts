import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Post } from 'src/app/models/post.model';
import { PublicacioneServices } from 'src/app/service/publicaciones.service';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [
    trigger('pageTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PublicationsComponent implements OnInit {
  seeComments = true
  subComments = true

  pageSize: number = 5; // Tamaño de página
  currentPage: number = 0; // Página actual
  lengthPost:number=0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  postLiked = false;


  constructor(private postService: PublicacioneServices) { }

  posts: Post[] =[];

  ngOnInit(): void {
    // this.getAllPost();
    this.getAllPostPage(this.currentPage, this.pageSize);
  }

  ngAfterViewInit() {
  }

  getAllPost(){
    this.postService.findAllPost().subscribe({next: data=>{
      this.posts= data.list;
      // this.updatePagedPosts();
      console.log(data);
    }})
  }

  getAllPostPage(page:number, size:number){
    this.postService.findAllPostPage(page, size).subscribe({next: data=>{
      this.lengthPost=data.count;
      this.posts= data.list;
      console.log(data);
    }})
  }

  activateComments(){
    this.seeComments=!this.seeComments
  }
  activateSubComments(){
    this.subComments=!this.subComments
  }

  toggleLike() {
    if (this.postLiked) {
      console.log("Restando likes");
      this.postLiked=false;
      // this.subtractLike();
    } else {
      this.postLiked=true;
      console.log("Sumando like");
      // this.addLike();
    }
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    console.log(event)
    this.getAllPostPage(event.pageIndex, event.pageSize);
  }

}
