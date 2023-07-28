import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/service/alerts.service';
import { CommentsService } from 'src/app/service/comments.service';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentDTO } from 'src/app/models/commentDTO';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(  private commentsService:CommentsService,
  private alertsService:AlertsService,
  private loginService:LoginService,
  private formBuilder:FormBuilder,
  public dialogRef: MatDialogRef<CommentsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Post,
  ) {
    this.post = data;
  }

  public comments:Comment[] = [];
  public user:User;
  public post:Post;
  commentLikedMap: { [commentId: string]: boolean } = {};

  // Editar comentarios
  editingMode = false;
  commentEdit:Comment;
  editedDescription = '';

  // Formulario para editar
  public formComment = this.formBuilder.group({
    descripction:['']
  })

  ngOnInit(): void {
    // Al cargar el componente inicia la busqueda como el usuario
    this.findAllComments();
    this.getUser();
  }

  // Busca todos los comentarios por el post seleccionado
  findAllComments(): void{    
    this.commentsService.findByPostComment(this.post.idPost).subscribe({
      next:(data)=>{
        console.log(data)
        this.comments = data.list;
        console.log(this.comments);
      },
      error:(data) =>{
        this.alertsService.errorMessage('',data.message);        
      }     
    })
  }
  
  // Obtiene todos los usuarios
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
  
  // Limpia el formulario despues de comentar
  clear(){
    this.formComment.reset()
  }
  

  // Guarda el comentario
  saveComment(){
    const comment = new CommentDTO();
    comment.post = this.post.idPost;
    comment.descripcion = this.formComment.controls.descripction.value;
    comment.user = this.user.id_user;
    this.commentsService.createComment(comment).subscribe({
      next:(data:any)=>{
        this.alertsService.succesMessage('',data.message);
        this.findAllComments();
        this.clear();
      },
      error:(data:any) =>{
        // console.log(data)
        this.alertsService.errorMessage('',data.error.message)
      }
    })
  }

  // Actualiza el comentario
  updateComment(comment:Comment){
    console.log(comment)
    const newComment = new CommentDTO();
    newComment.descripcion = this.editedDescription;  
    newComment.idComment = comment.idComment;
    // newComment.multimedia = null
    newComment.numLike = comment.numLike
    newComment.user = this.user.id_user;
    newComment.post = comment.post.idPost;
    this.commentsService.updateComment(newComment).subscribe({
      next:(data:any)=>{
        this.alertsService.succesMessage('',data.message);
        this.findAllComments();
        this.editingMode = false;      
      },
      error:(data:any) =>{
        // console.log(data)
        this.alertsService.errorMessage('',data.error.message)
      }     
    })

  }

  // Elimina el comentario
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

  // Likes de los comentarios para el backend
  likeComment(comment:Comment){
    this.commentsService.sumLike(comment.idComment).subscribe({
      next:(data:any) =>{
        console.log(data);
        // this.findAllComments();
      },
      error:(data:any)=>{
        console.log(data)
      }      
    })
  }

  // Quitar like del comentario seleccionado
  subtractLike(comment:Comment){
    this.commentsService.subtractLike(comment.idComment).subscribe({
      next:(data:any) =>{
        console.log(data);
        // this.findAllComments();
      },
      error:(data:any)=>{
        console.log(data)
      }      
    })
  }

  // Esto nos ayuda a poner el comentario para editarlo
  toggleEditMode(commentM:Comment) {    
    this.editingMode = true;    
    // Busca el comentario para que solo tenga uno y asi poder editar solo uno
    this.commentEdit = this.comments.find(comment => comment.idComment === commentM.idComment);
    this.editedDescription = commentM.descripcion; // Initialize the edited description
  }

  // Cancelacion del edit
  cancelEdit() {
    // Cancel editing and revert back to read-only mode
    this.editingMode = false;
    this.editedDescription = '';
    this.findAllComments();

  }

  // Agregando estilo para agregar y eliminar like
  toggleLikeComment(comment:any) {
    const commentId = comment.idComment;
    if (comment.liked) {
      console.log("Restando likes");
      comment.liked = false;
      comment.numLike--; // Restar el like
      this.subtractLike(comment);
    } else {
      comment.liked = true;
      console.log("Sumando like");
      comment.numLike++; // Sumar el like
      this.likeComment(comment);
    }
  }

  // Cerrar el componente
  closeComments(){
    this.dialogRef.close();
  }

}
