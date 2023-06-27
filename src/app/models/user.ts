// Modelo para el usuario
export class User{
    public id_user!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    // Se ponse tipo any pero es boleano por el 
    // form data
    public confirmed!: any;
    public email_verified!: string;
    public multi_factor_authentication!: string;
    public father_last_name!: string;
    public mother_last_name!: string;
    public age!: string;
    // Se ponse tipo any pero es Date por el 
    // form data
    public date_birth!: any;
    public avatar!: File;
}