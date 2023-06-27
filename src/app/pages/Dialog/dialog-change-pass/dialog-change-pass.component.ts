import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-change-pass',
  templateUrl: './dialog-change-pass.component.html',
  styleUrls: ['./dialog-change-pass.component.scss']
})
export class DialogChangePassComponent implements OnInit {

 
  constructor(
    private matDialogRef:MatDialogRef<DialogChangePassComponent>,
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
