import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dialog-erreur',
  templateUrl: './dialog-erreur.component.html',
  styleUrls: ['./dialog-erreur.component.scss']
})
export class DialogErreurComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogErreurComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  

}
