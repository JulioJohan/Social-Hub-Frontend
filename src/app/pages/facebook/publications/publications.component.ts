import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Post } from 'src/app/models/post.model';
import { PublicacioneServices } from 'src/app/service/publicaciones.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { Utils } from 'src/app/shared/utils/utils';
import { CommentsComponent } from './comments/comments.component';


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

  //Srcoll
  loading = false;
  cargando= false;


  constructor(private postService: PublicacioneServices,
    public dialog: MatDialog) { }

  posts: Post[] =[];

  ngOnInit(): void {
    // this.getAllPost();
    // this.getAllPostPage(this.currentPage, this.pageSize);
    this.loadMorePosts();
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
    console.log(page, size)
    this.postService.findAllPostPage(page, size).subscribe({next: data=>{
      this.lengthPost=data.count;
      this.posts= this.posts.concat(data.list); // Concatenar los nuevos posts al final del array existente
      this.cargando=false;
      console.log(data);

    }})
  }

  loadMorePosts() {
    if (!this.loading) {
      this.loading = true;
      this.getAllPostPage(this.currentPage, 5); // 5 posts por carga
      this.currentPage++; // Avanzamos al siguiente grupo de 5 posts
      this.loading = false;
    }
  }
  
  scrollPosition = 0;
  loadPostsTimeout: any;
  
  onScroll() {
    const scrollContainer = document.querySelector('.scrollClass');
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const containerHeight = scrollContainer?.clientHeight || 0;
    const containerScrollHeight = scrollContainer?.scrollHeight || 0;
    const containerScrollTop = scrollContainer?.scrollTop || 0;
    const windowBottom = windowHeight + containerScrollTop;
  
    if (windowBottom >= containerScrollHeight - 1 && containerScrollTop > this.scrollPosition) {
      //Agregando animacion de scroll
      this.cargando=true;

      this.scrollPosition = containerScrollTop;
      clearTimeout(this.loadPostsTimeout);
      this.loadPostsTimeout = setTimeout(() => {
        this.loadMorePosts();
      }, 400); // Esperar 200 ms antes de cargar más posts
    }
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



  createPost() {
    const modalRef = this.dialog.open(CreatePostComponent, {
      width: '1000px',
    });
    modalRef.afterClosed().subscribe(result=>{
      this.posts=[]
        //Se cerro el dialog
        this.getAllPostPage(0, 5);
    })
  }

  validaUrl(url:string):boolean{
    return Utils.isValidUrl(url)
  }

  goComments(post:Post){
    const matdialogConfig = new MatDialogConfig();
    matdialogConfig.data = post;
    matdialogConfig.autoFocus = false;
    matdialogConfig.width = '1000px';
    const modalRef = this.dialog.open(CommentsComponent, matdialogConfig)
  }


}
