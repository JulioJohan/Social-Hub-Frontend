import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  seeComments = true
  subComments = true
  constructor() { }

  ngOnInit(): void {
  }

  activateComments(){
    this.seeComments=!this.seeComments
  }
  activateSubComments(){
    this.subComments=!this.subComments
  }
}
