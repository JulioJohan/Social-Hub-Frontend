import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-signup-error',
  templateUrl: './dialog-signup-error.component.html',
  styleUrls: ['./dialog-signup-error.component.scss']
})
export class DialogSignupErrorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private matDialogRef:MatDialogRef<DialogSignupErrorComponent>,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }
  closeDialog(){
    this.matDialogRef.close()
  }

}
