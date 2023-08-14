import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "src/app/models/user";
import { LoginService } from "src/app/service/login.service";
import Swal from "sweetalert2";
import { AlertsService } from '../../../service/alerts.service';
@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  @ViewChild("fileInput") fileInput!: ElementRef;
  imgAct: string | ArrayBuffer | null;
  action = "Editar";
  authForm: FormGroup;
  data: User;
  avatar: File;
  constructor(
    private matDialogRef: MatDialogRef<EditUserComponent>,
    private authService: LoginService,
    private formBuilder: FormBuilder,
    private alertsService:AlertsService,

  ) {
    //construccion del formulario
    this.authForm = this.formBuilder.group({
      name: [{ value: "", disabled: true }, Validators.required],
      mothersLastName: [{ value: "", disabled: true }, Validators.required],
      fatherLastName: [{ value: "", disabled: true }, Validators.required],
      email: [
        { value: "", disabled: true },
        [Validators.required, Validators.email],
      ],
      age: [{ value: "", disabled: true }, Validators.required],
      dateBirth: [{ value: "", disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.dataUserId();
  }

  //Metodo para cerrar este dialogo editar usuario
  closeDialog() {
    this.matDialogRef.close(true);
  }
  //Netodo que nos permite optener los datos del usuario con el id
  dataUserId() {
    const id = this.authService.decodeToken();
    this.authService.findById(id).subscribe((data: any) => {
      this.data = data.data;
      this.imgAct = "" + this.data.avatar;
      const dateObj = new Date(this.data.date_birth);
      const formattedDate = dateObj.toISOString().split("T")[0];

      const datosPreexistentes = {
        name: this.data.name,
        mothersLastName: this.data.mother_last_name,
        fatherLastName: this.data.father_last_name,
        email: this.data.email,
        age: this.data.age,
        dateBirth: formattedDate,
      };

      // Llenar el formulario con los datos preexistentes
      this.authForm.patchValue(datosPreexistentes);
    });
  }
  //Metodo para cargar una imagen
  cargarImagen(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      const file = input.files[0];
      this.avatar = file;

      reader.onload = () => {
        this.imgAct = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  //método que permite que el contenedor pueda abrir el explorador para subir la imagen
  seleccImg() {
    this.fileInput.nativeElement.click();
  }
  //Método que para realizar las acciones del formulario
  actionButton() {
    if (this.action == "Editar") {
      this.authForm.enable();
      this.action = "Guardar";
    } else {
      if (this.authForm.valid) {
        this.seveEdit();
      } else {
        Swal.fire(
          "",
          "Completa todos los campos para editar tu perfil.",
          "warning"
        );
      }
    }
  }

  //método que guardar los cambios realizados en su perfil
  seveEdit() {
    const data = this.authForm.value;
    const dataUser: User = {
      name: data.name,
      mother_last_name: data.mothersLastName,
      father_last_name: data.fatherLastName,
      email: data.email,
      age: data.age,
      date_birth: data.dateBirth,
      avatar: this.avatar,
    };
    console.log(dataUser);
    this.authService.updateUser(dataUser).subscribe((data: any) => {
      if (data.ok) {
        this.action = "Editar";
        this.authForm.disable();
        return Swal.fire("", data.msg, "success");
      } else {
        return Swal.fire("", data.msg, "error");
      }
    });
  }

  //metodo que nos permitira cancelar las acciones de formularios
  closeAction() {
    if (this.action != "Editar") {
      this.action = "Editar";
      this.authForm.disable();
    } else {
      this.closeDialog();
    }
  }
  cambiar(){
    const email:User={
      email:this.data.email
    }
    this.authService.forgetPassword(email).subscribe(data=>{
      if(data.ok){
        this.matDialogRef.close()
        this.alertsService.succesMessage('',data.msg);  
      }
      if(!data.ok){
        this.alertsService.warningMessage(data.msg);
      }
    })
  }
}
