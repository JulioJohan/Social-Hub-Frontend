import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-signup',
  templateUrl: './dialog-signup.component.html',
  styleUrls: ['./dialog-signup.component.scss']
})
export class DialogSignupComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<DialogSignupComponent>,
    private router:Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.closeDialog()
      
    }, 10000);
  }
  closeDialog(){
    this.matDialogRef.close()
    this.router.navigateByUrl('/auth/signin')
  }

}
