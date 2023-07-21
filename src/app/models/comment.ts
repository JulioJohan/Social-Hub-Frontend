import { Post } from './post.model';
import { User } from './user';
export class Comment{
    idComment:number;
    descripcion:string;
    numLike:number;
    multimedia:string;
    user:User;
    post:Post;
    dateRegistration:Date;
}