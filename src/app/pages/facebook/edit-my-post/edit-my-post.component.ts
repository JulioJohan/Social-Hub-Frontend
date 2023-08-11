import { AlertsService } from "src/app/service/alerts.service";
import { LoginService } from "src/app/service/login.service";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PublicacioneServices } from "src/app/service/publicaciones.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-edit-my-post",
  templateUrl: "./edit-my-post.component.html",
  styleUrls: ["./edit-my-post.component.scss"],
})
export class EditMyPostComponent implements OnInit {
  postForm: FormGroup;
  idUser: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private fb: FormBuilder,
    private publicacioneServices: PublicacioneServices,
    private loginService: LoginService,
    private alertsService: AlertsService,
    public dialogRef: MatDialogRef<EditMyPostComponent>
  ) {
    this.postForm = this.fb.group({
      description: ["", [Validators.required]],
      idPost:[""]
    });
  }

  ngOnInit(): void {
    this.agregarDta()
  }
  //Nos permite optener los datos del post
  agregarDta(){
    this.publicacioneServices.findByIdPost(this.data).subscribe({next:data=>{
      const dataAnte={
        description:data.data.description,
        idPost: data.data.idPost
      }
      this.postForm.patchValue(dataAnte);
    }})
  }
  onSubmit() {
    const dataNew=this.postForm.value
    //Se envia 0 indicando que es una publicacion de bookface
    this.publicacioneServices.updatePost(0,dataNew).subscribe({
      next: (data) => {
        console.log(data)
        this.alertsService.succesMessage("Publicación", data.message);
        this.dialogRef.close();
      },
    });
  }
  //cerrar este dialog
  close() {
    this.dialogRef.close();
  }
}
