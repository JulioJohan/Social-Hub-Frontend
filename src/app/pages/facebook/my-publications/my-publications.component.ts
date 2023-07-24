import { AlertsService } from 'src/app/service/alerts.service';
import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { Post } from "src/app/models/post.model";
import { PublicacioneServices } from "src/app/service/publicaciones.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { Utils } from "src/app/shared/utils/utils";
import { CreatePostComponent } from "../create-post/create-post.component";
import { LoginService } from "src/app/service/login.service";
import { User } from "src/app/models/user";
import { CommentsComponent } from "../publications/comments/comments.component";
import { EditMyPostComponent } from '../edit-my-post/edit-my-post.component';

@Component({
  selector: "app-my-publications",
  templateUrl: "./my-publications.component.html",
  styleUrls: ["./my-publications.component.scss"],
})
export class MyPublicationsComponent implements OnInit {
  seeComments = true;
  subComments = true;

  pageSize: number = 5; // Tamaño de página
  currentPage: number = 0; // Página actual
  lengthPost: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  data: User;

  postLiked = false;

  //Srcoll
  loading = false;
  cargando = false;

  constructor(
    private postService: PublicacioneServices,
    public dialog: MatDialog,
    private authService: LoginService,
    private alertsService: AlertsService
  ) {}

  posts: Post[] = [];

  ngOnInit(): void {
    // this.getAllPost();
    // this.getAllPostPage(this.currentPage, this.pageSize);
    this.getAllPostPage();
  }

  ngAfterViewInit() {
    this.uId();
  }

  getAllPost() {
    this.postService.findAllPost().subscribe({
      next: (data) => {
        this.posts = data.list;
        // this.updatePagedPosts();
        // console.log(data);
      },
    });
  }

  getAllPostPage() {
    // console.log(page, size)
    this.postService.findByUserPost().subscribe({
      next: (data) => {
        this.posts = data.list; // Concatenar los nuevos posts al final del array existente
        this.cargando = false;
        //console.log(data);
      },
    });
  }

  deletePost(id: any) {
    this.postService.deletePost(id).subscribe({
      next:(data)=>{
        this.alertsService.succesMessage("", data.message);
        this.getAllPostPage()
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
      this.getAllPostPage();
    });
  }
  scrollPosition = 0;
  loadPostsTimeout: any;

  onScroll() {
    const scrollContainer = document.querySelector(".scrollClass");
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const containerHeight = scrollContainer?.clientHeight || 0;
    const containerScrollHeight = scrollContainer?.scrollHeight || 0;
    const containerScrollTop = scrollContainer?.scrollTop || 0;
    const windowBottom = windowHeight + containerScrollTop;

    if (
      windowBottom >= containerScrollHeight - 1 &&
      containerScrollTop > this.scrollPosition
    ) {
      //Agregando animacion de scroll

      this.scrollPosition = containerScrollTop;
      clearTimeout(this.loadPostsTimeout);
      this.loadPostsTimeout = setTimeout(() => {}, 400); // Esperar 200 ms antes de cargar más posts
    }
  }

  activateComments() {
    this.seeComments = !this.seeComments;
  }
  activateSubComments() {
    this.subComments = !this.subComments;
  }

  toggleLike(row) {
    // console.log(row)
    if (row.liked) {
      // console.log("Restando likes");
      this.postLiked = false;
      row.liked = false;
      row.numLike--;
      this.subtractLike(row.idPost);
    } else {
      this.postLiked = true;
      row.numLike++;
      row.liked = true;
      // console.log("Sumando like");
      this.sumLike(row.idPost);
    }
  }

  subtractLike(id) {
    this.postService.subtractLike(id).subscribe({
      next: (data) => {
        // console.log(data);
      },
    });
  }

  sumLike(id) {
    this.postService.sumLike(id).subscribe({
      next: (data) => {
        // console.log(data);
      },
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    // console.log(event)
  }

  createPost() {
    const modalRef = this.dialog.open(CreatePostComponent, {
      // width: '1000px',nent
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "full-screen-dialog-create-post",
    });
    modalRef.afterClosed().subscribe((result) => {
      //Se cerro el dialog
      this.getAllPostPage();
    });
  }

  validaUrl(url: string): boolean {
    return Utils.isValidUrl(url);
  }

  goComments(post: Post) {
    const dialogConfig: MatDialogConfig<any> = {
      data: post,
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "full-screen-dialog-coments",
    };
    dialogConfig.disableClose = true;

    const modalRef = this.dialog.open(CommentsComponent, dialogConfig);
  }

  //optener los datos del usuario desde el token
  uId() {
    const uid = this.authService.decodeToken();
    this.authService.findById(uid).subscribe((data: any) => {
      this.data = data.data;
    });
  }
}
