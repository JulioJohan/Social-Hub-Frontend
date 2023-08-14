import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AlertsService } from "src/app/service/alerts.service";
import { LoginService } from "src/app/service/login.service";
import { PublicacioneServices } from "src/app/service/publicaciones.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  idUser: number;

  constructor(
    private fb: FormBuilder,
    private publicacioneServices: PublicacioneServices,
    private loginService: LoginService,
    private alertsService: AlertsService,
    public dialogRef: MatDialogRef<CreatePostComponent>
  ) {
    this.postForm = this.fb.group({
      description: ["", [Validators.required, Validators.maxLength(255)]],
      multipartFile: [""],
    });
  }

  ngOnInit(): void {
    this.idUser = this.loginService.decodeToken();
  }

  onSubmit() {
    console.log(this.postForm.get('description').valid)
    if(!this.postForm.get('description').valid){
      this.alertsService.errorMessage("", "La descripción es requerida")
    }
    if (this.postForm.valid) {
      //Datos del formulario
      const postFile = this.postForm.value;
      console.log(postFile);

      //Se crea un objeto de tipo File para manejar la imagen
      let imagenFile: File = new File([], "");

      //Se valida que la imagen se haya subido al input en caso de que no se pone como null
      if (postFile.multipartFile != "") {
        imagenFile = postFile.multipartFile[0].file;
      } else {
        imagenFile = null;
      }

      // Crear instancia de FormData y agregar propiedades del publicación a enviar
      const formData = new FormData();
      formData.append("description", postFile.description);
      //SE valida si la imagen existe
      if (imagenFile != null) {
        formData.append("multipartFile", imagenFile);
      }
      formData.append("user", this.idUser.toString());
      //Se envía 0 indicando que es una publicación de bookface
      this.publicacioneServices.createPost(formData, 0).subscribe({
        next: (data) => {
          this.alertsService.succesMessage("Publicación", data.message);
          this.dialogRef.close();
        },
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
