import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { CommentDTO } from '../models/commentDTO';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  private urlAdmin = "https://18.220.73.90/backend/comment";

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private httpOptionsFormData = {
    headers: new HttpHeaders({"enctype": "multipart/form-data" }),
  };

  findAllComment():Observable<Response<Comment>>{
    return this.http.get<Response<Comment>>(`${this.urlAdmin}/findAllComment`,this.httpOptions);
  }

  findByIdComment(idComment:number):Observable<Response<Comment>>{
    return this.http.get<Response<Comment>>(`${this.urlAdmin}/findByIdComment/${idComment}`,this.httpOptions);
  }

  findByPostComment(idComment:number):Observable<Response<Comment>>{
    return this.http.get<Response<Comment>>(`${this.urlAdmin}/findByPostComment/${idComment}`,this.httpOptions);
  }

  createComment(commentDTO:CommentDTO):Observable<Response<Comment>>{
    let headers = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    const formData = new FormData();
    formData.append('user',commentDTO.user.toString());
    formData.append('post', commentDTO.post.toString());
    if(commentDTO.multipartFile != null){
      formData.append('multipartFile',commentDTO.multipartFile);
    }
    formData.append('descripcion',commentDTO.descripcion);
    console.log(formData)
    return this.http.post<Response<Comment>>(`${this.urlAdmin}/createComment/`,formData,{ headers: headers });
  }

  updateComment(commentDTO:CommentDTO):Observable<Response<Comment>>{
    let headers = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    const formData = new FormData();
    formData.append('idComment', commentDTO.idComment.toString());
    formData.append('user',commentDTO.user.toString());
    formData.append('post', commentDTO.post.toString());
    if(commentDTO.multipartFile != null){
      formData.append('multipartFile',commentDTO.multipartFile);
    }
    formData.append('descripcion',commentDTO.descripcion);
    formData.append('multimedia',commentDTO.multimedia);

    return this.http.put<Response<Comment>>(`${this.urlAdmin}/updateComment/`,formData,{headers:headers});
  }

  deleteComment(idPost:number):Observable<Response<Comment>>{
    return this.http.delete<Response<Comment>>(`${this.urlAdmin}/deleteComment/${idPost}`,this.httpOptions);
  }

  sumLike(idComment:number):Observable<Response<Comment>>{
    return this.http.put<Response<Comment>>(`${this.urlAdmin}/sumLike/${idComment}`,this.httpOptions);
  }

  subtractLike(idComment:number){
    return this.http.put<Response<Comment>>(`${this.urlAdmin}/subtractLike/${idComment}`,this.httpOptions);

  }


}
