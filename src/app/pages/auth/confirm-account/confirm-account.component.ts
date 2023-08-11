import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { AlertsService } from '../../../service/alerts.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.scss']
})
export class ConfirmAccountComponent implements OnInit {

  tokenValidacion: string = "";

  constructor(private route: ActivatedRoute, private loginService: LoginService,
    private router: Router, private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.checkTokenEmail();
  }
  // Checa si el token esta correctamente bien
  checkTokenEmail() {
    // Obtenemos el parametro
    this.tokenValidacion = this.route.snapshot.paramMap.get('emailVerified')!;
    console.log("Token" + this.tokenValidacion);
    // Verificamos en el back
    this.loginService.confirmEmail(this.tokenValidacion).subscribe(data => {
      console.log(data)
      if (!data.ok) {
        this.alertsService.errorMessage('Token', 'Token no Valido');
      }
      this.router.navigateByUrl('/auth/signin')
      if (data.ok) {
        this.alertsService.succesMessage('Tu cuenta ha sido confirmada!', 'Ya puedes iniciar sesión');
      }
      this.router.navigateByUrl('/auth/signin')
    })

  }


}
