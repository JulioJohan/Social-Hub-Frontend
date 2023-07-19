import { Component, Inject, OnInit } from '@angular/core';
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
  private formBuilder:FormBuilder ) {
    this.post = data
  }

  public post:Post;
  public comments:Comment[] = [];
  public user:User;
  public imageUpload!: File;
  public mostrarImagen!:string;
  public imageTemp!: string | ArrayBuffer | null;
  postLiked = false;

  formComment = this.formBuilder.group({
    descripcion:[''],
    img:[]
  })

  ngOnInit(): void {
    this.findAllComments();
    this.getUser();
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

  commentPost(){
  }

  findAllComments(){    
    this.commentsService.findByPostComment(this.post.idPost).subscribe({
      next:(data)=>{
        console.log(data)
        this.comments = data.list;
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
      },
      error:(data:any) =>{
        // console.log(data)
        this.alertsService.errorMessage('',data.error.message)
      }
    })
  }

  deleteImage(){
    this.mostrarImagen = null;
  }

  deleteComment(){
    
  }

  likeComment(comment:CommentDTO){

  }
  dislikeComment(comment:CommentDTO){

  }

  


  closeCommentDialog(){
    this.dialogRef.close();
  }

}
