import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationstComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  comenOpen(){
    const modalRef = this.dialog.open(CommentsComponent, {
      // width: '1000px',
      maxWidth: '100vw',
      maxHeight: '100vh',
       panelClass: 'full-screen-dialog-comment-tokTik',
    });
    modalRef.afterClosed().subscribe(result=>{
      
    })
  }
  
}
