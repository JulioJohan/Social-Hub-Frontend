import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.model';
import { CommentsService } from '../../../../service/comments.service';
import { AlertsService } from '../../../../service/alerts.service';
import { Comment } from 'src/app/models/comment';
import { CommentDTO } from 'src/app/models/commentDTO';
import { LoginService } from '../../../../service/login.service';
import { User } from 'src/app/models/user';
import { Response } from 'src/app/models/response.model';
import { Respuesta } from 'src/app/models/respuesta';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Post,
  public dialogRef: MatDialogRef<CommentsComponent>,
  private commentsService:CommentsService,
  private alertsService:AlertsService,
  private loginService:LoginService,
  private formBuilder:FormBuilder,
  private elementRef: ElementRef ) {
    this.post = data
  }

  public post:Post;
  public comments:Comment[] = [];
  public user:User;
  public imageUpload!: File;
  public mostrarImagen!:string;
  public mostrarImagen2!:string;
  public imageTemp!: string | ArrayBuffer | null;
  commentLikedMap: { [commentId: string]: boolean } = {};
  commentLiked = false;
  postLiked = false;
  editableComment: any = null;


  // Edit Comment
  editingMode = false;
  editedDescription = '';
  imageEdit:any;

  formComment = this.formBuilder.group({
    descripcion:[''],
    img:[]
  })

  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: Event) {
  //   // Check if the click event occurred outside the component's element
  //   if (!this.elementRef.nativeElement.contains(event.target)) {
  //     // Cancel editing if the editing mode is active
  //     if (this.editingMode) {
  //       this.cancelEdit();
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.findAllComments();
    this.getUser();
  }

  toggleLikeComment(comment:Comment) {
    const commentId = comment.idComment;
    if (this.commentLikedMap[commentId]) {
      console.log("Restando likes");
      // this.commentLiked=false;
      this.subtractLike(comment);
    } else {
      this.commentLikedMap[commentId] = true;
      // this.commentLiked=true;
      console.log("Sumando like");
      this.likeComment(comment);
    }
  }


  toggleLikePost(){
    if (this.postLiked) {
      console.log("Restando likes");
      this.postLiked=false;
      // this.subtractLike(comment);
    } else {
      this.postLiked=true;
      console.log("Sumando like");
      // this.likeComment(comment);
    }
  }

  toggleEditMode(comment:Comment) {
    console.log('Entre Toggle ')
    this.editingMode = true;
    this.editedDescription = comment.descripcion; // Initialize the edited description
  }

  cancelEdit() {
    // Cancel editing and revert back to read-only mode
    this.editingMode = false;
    this.editedDescription = '';
    this.findAllComments();

  }

  commentPost(){
  }

  findAllComments(){    
    this.commentsService.findByPostComment(this.post.idPost).subscribe({
      next:(data)=>{
        console.log(data)
        this.comments = data.list;
        console.log(this.comments);
        console.log(this.user)
      },
      error:(data) =>{
        this.alertsService.errorMessage('',data.message);        
      }     
    })

  }

  getUser(){
    const id = this.loginService.decodeToken();
    this.loginService.findById(id).subscribe({
      next:(user:any)=>{
        this.user = user.data; 
        console.log(this.user)       
      },
      error:(error)=>{
        this.alertsService.errorMessage('Upps','Hubo un error insesperado');
      }
    })
  }

  cambiarImagen(file: File) {    
    this.imageUpload = file;
    if (!file) {
      return this.imageTemp = null;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.imageTemp = reader.result;
      }
      return this.imageTemp;
    }

    // console.log(event)
    // this.fileUploadService.actualizarFoto()
  }

  removePlaceholderText() {
    const placeholder = document.getElementById('placeholder');
    if (placeholder) {
      placeholder.style.display = 'none';
    }
  }

  
  

  uploadImage(event:any){
    const imagen = event.target.files[0];
    this.formComment.controls.img.setValue(imagen);
    console.log(event)
    const reader = new FileReader();
    // const control = this.formComment.controls.img;
    reader.onload = (ima) =>{    
      const base64img = reader.result + '';
      console.log(base64img)
      this.mostrarImagen = base64img;
      // control.setValue(base64img);
      // console.log(control.value)    
    }
    reader.readAsDataURL(imagen); 
    event.srcElement.value = null;
  }

  uploadImageEditComment(event:any,comment:Comment){
    const imagen = event.target.files[0];
    this.imageEdit = imagen;
    console.log(event)
    const reader = new FileReader();
    // const control = this.formComment.controls.img;
    reader.onload = (ima) =>{    
      const base64img = reader.result + '';
      console.log(base64img)
      this.mostrarImagen2 = base64img;
      // control.setValue(base64img);
      // console.log(control.value)    
    }
    reader.readAsDataURL(imagen); 
    event.srcElement.value = null;
  }

  saveComment(){
    const comment = new CommentDTO();
    comment.multipartFile = this.formComment.controls.img.value;
    comment.post = this.post.idPost;
    comment.descripcion = this.formComment.controls.descripcion.value;
    comment.user = this.user.id_user;
    console.log(comment)

    this.commentsService.createComment(comment).subscribe({
      next:(data:Response<any>)=>{
        this.alertsService.succesMessage('',data.message);
        this.findAllComments();
        this.limpiarComentario();
      },
      error:(data:any) =>{
        // console.log(data)
        this.alertsService.errorMessage('',data.error.message)
      }
    })
  }

  limpiarComentario(){
    this.mostrarImagen = '';
    this.formComment.controls.img.setValue('');
    this.formComment.controls.descripcion.setValue('');
  }

  deleteImage(){
    this.mostrarImagen = null;
  }

  updateComment(comment:Comment){
    console.log(comment)
    const newComment = new CommentDTO();
    newComment.descripcion = this.editedDescription;  
    newComment.idComment = comment.idComment;
    console.log(this.imageEdit)
    this.imageEdit != null ? newComment.multipartFile = this.imageEdit : newComment.multimedia = comment.multimedia;
    newComment.numLike = comment.numLike
    newComment.user = this.user.id_user;
    newComment.post = comment.post.idPost;
    console.log(newComment)
    this.commentsService.updateComment(newComment).subscribe({
      next:(data:any)=>{
        this.alertsService.succesMessage('',data.message);
        this.findAllComments();
        this.editingMode = false;      
        this.mostrarImagen2 = ''
      },
      error:(data:any) =>{
        // console.log(data)
        this.alertsService.errorMessage('',data.error.message)
      }     
    })

  }

  deleteComment(comment:Comment){
    this.commentsService.deleteComment(comment.idComment).subscribe({
      next:(data:any)=>{
        this.alertsService.succesMessage('',data.message);
        this.findAllComments();
      },
      error:(data:any) =>{
        // console.log(data)
        this.alertsService.errorMessage('',data.error.message)
      }      
    })    
  }

  likeComment(comment:Comment){
    this.commentsService.sumLike(comment.idComment).subscribe({
      next:(data:any) =>{
        console.log(data);
        this.findAllComments();
      },
      error:(data:any)=>{
        console.log(data)
      }      
    })
  }

  subtractLike(comment:Comment){
    this.commentsService.subtractLike(comment.idComment).subscribe({
      next:(data:any) =>{
        console.log(data);
        this.findAllComments();
      },
      error:(data:any)=>{
        console.log(data)
      }      
    })
  }

  removeImage(comment) {
    comment.multimedia = null;
    
  }
  


  closeCommentDialog(){
    this.dialogRef.close();
  }

}
