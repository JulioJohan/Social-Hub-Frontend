import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-signup',
  templateUrl: './dialog-signup.component.html',
  styleUrls: ['./dialog-signup.component.scss']
})
export class DialogSignupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private matDialogRef:MatDialogRef<DialogSignupComponent>,
    private router:Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.closeDialog()
      
    }, 5000);
  }
  closeDialog(){
    this.matDialogRef.close()
    this.router.navigateByUrl('/auth/signin')
  }

}
