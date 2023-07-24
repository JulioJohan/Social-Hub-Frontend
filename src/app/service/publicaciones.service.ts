import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "../models/response.model";
import { Post } from "../models/post.model";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class PublicacioneServices {
  private urlAdmin = "http://localhost:8081/post";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  private httpOptionsFormData = {
    headers: new HttpHeaders({"enctype": "multipart/form-data" }),
  };

  constructor(private http: HttpClient,
    private authService:LoginService) {}

  public findAllPost(): Observable<Response<Post>> {
    return this.http.get<Response<Post>>(`${this.urlAdmin}/findAllPost`, this.httpOptions)
  }

  public findAllPostPage(page:number, size:number): Observable<Response<Post>> {
    return this.http.get<Response<Post>>(`${this.urlAdmin}/findAllPost/${page}/${size}`, this.httpOptions)
  }
  public findByIdPost(idPost:number): Observable<Response<Post>> {
    return this.http.get<Response<Post>>(`${this.urlAdmin}/findByIdPost/${idPost}`, this.httpOptions)
  }
  public findByUserPost(): Observable<Response<Post>> {
    const idUser=this.authService.decodeToken()
    return this.http.get<Response<Post>>(`${this.urlAdmin}/findByUserPost/${idUser}`, this.httpOptions)
  }

 public createPost(post:FormData,tipePost:number): Observable<Response<Post>> {
    let headers = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    return this.http.post<Response<Post>>(`${this.urlAdmin}/createPost/${tipePost}`, post, { headers: headers })
 }

 public updatePost(id:number,post:any): Observable<Response<Post>> {
    return this.http.put<Response<Post>>(`${this.urlAdmin}/updatePost/${id}`, post, this.httpOptions)
 }

 public deletePost(idPost:number): Observable<Response<Post>> {
    return this.http.delete<Response<Post>>(`${this.urlAdmin}/deletePost/${idPost}`, this.httpOptions)
 }

 public sumLike(idPost:number): Observable<Response<Post>> {
    return this.http.put<Response<Post>>(`${this.urlAdmin}/sumLike/${idPost}`, {}, this.httpOptions)
 }
 public subtractLike(idPost:number): Observable<Response<Post>> {
    return this.http.put<Response<Post>>(`${this.urlAdmin}/subtractLike/${idPost}`, {}, this.httpOptions)
 }
}
