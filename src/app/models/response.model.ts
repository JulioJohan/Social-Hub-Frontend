export class Response<T>{
    status:string;
    message:string;
    list:[];
    count:number;
    data:T;
}