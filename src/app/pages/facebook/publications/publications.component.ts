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
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/models/user';
import { AlertsService } from 'src/app/service/alerts.service';
import { EditMyPostComponent } from '../edit-my-post/edit-my-post.component';


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
  data:User;


  postLiked = false;

  //Srcoll
  loading = false;
  cargando= false;


  constructor(private postService: PublicacioneServices,
    public dialog: MatDialog,
    private authService: LoginService,
    private alertsService: AlertsService
  ) { }

  posts: Post[] =[];

  ngOnInit(): void {
    // this.getAllPost();
    // this.getAllPostPage(this.currentPage, this.pageSize);
    this.loadMorePosts();
  }

  ngAfterViewInit() {
    this.uId();
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

  toggleLike(row) {
    console.log(row)
    if (row.liked) {
      console.log("Restando likes");
      this.postLiked=false;
      row.liked=false;
      row.numLike--;
      this.subtractLike(row.idPost);
    } else {
      this.postLiked=true;
      row.numLike++;
      row.liked=true;
      console.log("Sumando like");
      this.sumLike(row.idPost);
    }
  }

  subtractLike(id){
    this.postService.subtractLike(id).subscribe({next:data=>{
      console.log(data);
    }})
  }

  sumLike(id){
    this.postService.sumLike(id).subscribe({next:data=>{
      console.log(data);
    }})
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    console.log(event)
    this.getAllPostPage(event.pageIndex, event.pageSize);
  }



  createPost() {
    const modalRef = this.dialog.open(CreatePostComponent, {
      // width: '1000px',
      maxWidth: '100vw',
      maxHeight: '100vh',
       panelClass: 'full-screen-dialog-create-post',
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

    const dialogConfig: MatDialogConfig<any> = {
      data:post,
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog-coments',
    };
    dialogConfig.disableClose = true;
    
    const modalRef = this.dialog.open(CommentsComponent, dialogConfig)
  }


  //optener los datos del usuario desde el token
  uId(){
    const uid = this.authService.decodeToken();
    this.authService.findById(uid).subscribe((data:any) => {
      this.data = data.data
    });
  }

  //Elimina la publicacion
  deletePost(id: any) {
    this.postService.deletePost(id).subscribe({
      next:(data)=>{
        this.alertsService.succesMessage("", data.message);
        this.getAllPostPage(0, 5);
      },
      error:(data) =>{
        this.alertsService.errorMessage('',data.message);        
      }     
    })
  }


  editPost(id: any){
    const modalRef = this.dialog.open(EditMyPostComponent, {
      data:id,
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "full-screen-dialog-create-post",
    });
    modalRef.afterClosed().subscribe((result) => {
      //Se cerro el dialog
      this.getAllPostPage(0, 5);
    });
  }

}
