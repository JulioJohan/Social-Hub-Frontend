import { Post } from './post.model';
import { User } from './user';
export class Comment{
    idComment:number;
    descripcion:number;
    numLike:number;
    multimedia:number;
    user:User;
    post:Post;
    dateRegistration:Date;
}